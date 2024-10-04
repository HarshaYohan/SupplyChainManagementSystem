"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar.jsx";
import "../../styles/cart.css"; 

function Cart() {
  
  const [cartItems, setCartItems] = useState([
    { title: "product", price: 20, quantity: 2 },
  ]);

  const handleRemoveItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
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
              <div key={index} className="cart-item">
                <h2>{item.title}</h2>
                <p>Price: ${item.price}</p>
                <div className="quantity-section">
                  <label>Quantity:</label>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
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
              <h2>Total: ${calculateTotal()}</h2>
            </div>
          </div>
        ) : (
          <p className="empty-cart">Your cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cart;