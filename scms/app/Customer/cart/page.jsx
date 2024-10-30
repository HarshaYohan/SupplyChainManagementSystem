"use client"; // Ensure this is a client component
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import "../../../styles/customer/cart.css";
import axios from "axios";
import UserSession from "../../../utils/userSession.js";
import { useRouter } from 'next/navigation'; // Correct import for App Router

function Cart() {
  const router = useRouter(); // Initialize router
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState(null);
  const [selectedStore, setSelectedStore] = useState("");
  const [roots, setRoots] = useState([]);
  const [selectedRoot, setSelectedRoot] = useState("");
  const [rootID, setRootID] = useState(null); // Ensure this stores the correct RouteID
  const [cartID, setCartID] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const storedUserData = UserSession.getUser();
    if (storedUserData) {
      setUserData(storedUserData);
      const fetchCartID = async () => {
        try {
          const response = await axios.post("/api/Customer/cartId", {
            userID: storedUserData.userId,
          });
          setCartID(response.data.cartID);
        } catch (err) {
          console.error("Error fetching cart ID:", err);
        }
      };
      fetchCartID();
    }
  }, []);

  useEffect(() => {
    if (userData) {
      const handleAddCart = async () => {
        try {
          const response = await axios.post("/api/Customer/fetchFromCart", {
            userData,
          });
          setCartItems(response.data);
        } catch (err) {
          console.error(err);
        }
      };
      handleAddCart();
    }
  }, [userData]);

  const handleRemoveItem = async (index) => {
    const productID = cartItems[index].ProductID;
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);

    try {
      await axios.post("/api/Customer/updateCart", { productID, cartID });
    } catch (err) {
      console.error("Error updating the cart:", err);
    }
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) return;
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

  useEffect(() => {
    const fetchRoots = async () => {
      try {
        const response = await axios.post("/api/Customer/fetchRoots", {
          store: selectedStore,
        });
        //console.log("Fetched roots:", response.data);
        setRoots(response.data);
      } catch (err) {
        console.error("Error fetching routes:", err);
      }
    };

    if (selectedStore) {
      fetchRoots();
      console.log(roots);
    }
  }, [selectedStore]);

  const handleStoreChange = (e) => setSelectedStore(e.target.value);
  
  const handleRootChange = (e) => {
    const selectedRoute = roots.find((root) => root.RouteDescription === e.target.value);
    console.log(e.target.key);
    if (selectedRoute) {
      setSelectedRoot(selectedRoute.RouteDescription);
      setRootID(selectedRoute.RouteID); // Store the correct RouteID
    }
  };

  const handlePlaceOrderClick = async () => {
    try {
      await axios.post("/api/Customer/placeOrder", {
        CustomerID: userData.userId,
        OrderDate: new Date().toISOString().split('T')[0],
        RouteID: rootID, // Use the correct RouteID here
        DeliveryAddress: address,
        CartID: cartID,
        City: selectedStore,
      });
      router.push("orders"); // Navigate to the orders page
    } catch (err) {
      console.error("Error placing order:", err.response?.data || err.message);
    }
  };

  const handleSaveChanges = async () => {
    try {
      await axios.post("/api/Customer/updateCartItems", { cartItems });
      window.location.reload();
    } catch (err) {
      console.error("Error saving cart changes:", err);
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
                <p>Price: {parseFloat(item.Price).toFixed(2)}</p>
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
              <h2>Total: LKR {calculateTotal().toFixed(2)}</h2>
            </div>
          </div>
        ) : (
          <p className="empty-cart">Your cart is empty</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="confirmationSection">
          <h1 className="cart-title">Order Confirmation</h1>
          <p className="delivery-time-message">
            Please note: It may take up to 7 days to deliver your order.
          </p>

          <div className="cart-item">
            <label htmlFor="storeDropdown">Choose The Relevant Store:</label>
            <select
              id="storeDropdown"
              value={selectedStore}
              onChange={handleStoreChange}
            >
              <option value="">Select the Store</option>
              {["Colombo", "Negombo", "Matara", "Galle", "Badulla", "Anuradhapura", "Trincomalee", "Jaffna"].map(
                (store) => (
                  <option key={store} value={store}>
                    {store}
                  </option>
                )
              )}
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
                <option key={root.RouteID} value={root.RouteDescription}>
                  {root.RouteDescription}
                </option>
              ))}
            </select>

            <label htmlFor="address-input">Enter Delivery Address:</label>
            <input
              id="address-input"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              required
            />

            <button
              className="placeorder-button"
              onClick={handlePlaceOrderClick}
              disabled={!selectedStore || !selectedRoot || !address}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
