"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import "../../styles/cart.css";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState(null);

  // Fetch user data from localStorage when the component mounts
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData); // Update state with the user data
    }
  }, []);

  // Fetch cart items when userData is available
  useEffect(() => {
    if (userData) {
      // Only call the API when userData is not null
      const handleAddCart = async () => {
        try {
          const response = await axios.post("/api/fetchFromCart", {
            userData,
          });
          setCartItems(response.data); // Set the initial cart items from the API
        } catch (err) {
          console.log(err);
          // Optional: Show an error message to the user
        }
      };

      handleAddCart();
    }
  }, [userData]); // Depend on userData, so this effect runs when userData is updated

  const handleRemoveItem = async (index) => {
    const productName = cartItems[index].ProductName;
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    if (cartItems) {
      try {
        await axios.post("/api/updateCart", {
          productName,
        });
      } catch (err) {
        console.log("Error updating the cart.");
        console.log(err);
      }
    }
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity to less than 1
    const updatedItems = [...cartItems];
    updatedItems[index].Quantity = newQuantity; // Update quantity
    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.Price) * item.Quantity, // Ensure Price is treated as a number
      0
    );
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
                {" "}
                {/* Use a combination of ProductName and index as key */}
                <h2>{item.ProductName}</h2>
                <p>Price: ${parseFloat(item.Price).toFixed(2)}</p>{" "}
                {/* Display price formatted to two decimal places */}
                <div className="quantity-section">
                  <label>Quantity:</label>
                  <input
                    type="number"
                    value={item.Quantity}
                    min="1"
                    onChange={
                      (e) =>
                        handleQuantityChange(
                          index,
                          parseInt(e.target.value) || 1
                        ) // Fallback to 1 if NaN
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
              <h2>Total: ${calculateTotal().toFixed(2)}</h2>{" "}
              {/* Display total formatted to two decimal places */}
            </div>
          </div>
        ) : (
          <p className="empty-cart">Your cart is empty</p>
        )}
      </div>
      <div className="confirmationSection">
        <h1 className="cart-title">Order Confirmation</h1>
        <div className="cart-item">
          <input type="text" placeholder="Route Description....." />
          <button className="placeorder-button">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
