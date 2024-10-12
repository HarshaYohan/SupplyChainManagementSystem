"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import "../../styles/cart.css";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState(null);
  const [selectedStore, setSelectedStore] = useState("");
  const [roots, setRoots] = useState([]);
  const [selectedRoot, setSelectedRoot] = useState("");

  // Fetch user data from localStorage when the component mounts
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
    }
  }, []);

  // Fetch cart items when userData is available
  useEffect(() => {
    if (userData) {
      const handleAddCart = async () => {
        try {
          const response = await axios.post("/api/fetchFromCart", { userData });
          setCartItems(response.data);
        } catch (err) {
          console.log(err);
        }
      };

      handleAddCart();
    }
  }, [userData]);

  const handleRemoveItem = async (index) => {
    const productName = cartItems[index].ProductName;
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    try {
      await axios.post("/api/updateCart", { productName });
    } catch (err) {
      console.log("Error updating the cart.", err);
    }
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity to less than 1
    const updatedItems = [...cartItems];
    updatedItems[index].Quantity = newQuantity;
    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.Price) * item.Quantity,
      0
    );
  };

  const handleStoreChange = async (e) => {
    const store = e.target.value;
    setSelectedStore(store);

    try {
      const response = await axios.post("/api/fetchRoots", { store });
      setRoots(response.data); // Set the roots based on the selected store
    } catch (err) {
      console.log(err);
    }
  };

  const handleRootChange = (e) => {
    setSelectedRoot(e.target.value);
  };

  const handlePlaceOrderClick = async () => {
    try {
      await axios.post("/api/placeOrder", {userData, selectedRoot });
      console.log("Succesfull!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={item.ProductName + index} className="cart-item">
                <h2>{item.ProductName}</h2>
                <p>Price: ${parseFloat(item.Price).toFixed(2)}</p>
                <div className="quantity-section">
                  <label>Quantity:</label>
                  <input
                    type="number"
                    value={item.Quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value) || 1)
                    }
                  />
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="total-section">
              <h2>Total: ${calculateTotal().toFixed(2)}</h2>
            </div>
          </div>
        ) : (
          <p className="empty-cart">Your cart is empty</p>
        )}
      </div>
      <div className="confirmationSection">
        <h1 className="cart-title">Order Confirmation</h1>
        <div className="cart-item">
          <label htmlFor="storeDropdown">Choose The Relevant Store: </label>
          <select
            id="storeDropdown"
            value={selectedStore}
            onChange={handleStoreChange}
          >
            <option value="">Select the Store</option>
            <option value="Colombo">Colombo</option>
            <option value="Negombo">Negombo</option>
            <option value="Matara">Matara</option>
            <option value="Galle">Galle</option>
            <option value="Badulla">Badulla</option>
            <option value="Anuradhapura">Anuradhapura</option>
            <option value="Trincomalee">Trincomalee</option>
            <option value="Jaffna">Jaffna</option>
          </select>

          <label htmlFor="route-dropdown">Choose The Relevant Route:</label>
          <select
            id="route-dropdown"
            value={selectedRoot}
            onChange={handleRootChange}
            disabled={!roots.length}
          >
            <option value="">Select the Route</option>
            {roots.map((root) => (
              <option key={root.RouteDescription} value={root.RouteDescription}>
                {root.RouteDescription}
              </option>
            ))}
          </select>

          <button
            className="placeorder-button"
            onClick={handlePlaceOrderClick}
            disabled={!selectedStore || !selectedRoot}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
