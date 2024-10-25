"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import UserSession from "../../../utils/userSession"; // Adjust path if needed
import "../../../styles/customer/itemsCard.css";

function Card({ productId, title, price, image }) {
  const [quantity, setQuantity] = useState(1); // Track selected quantity
  const router = useRouter();
  const userSession = UserSession; // Access the singleton session

  const handleAddToCart = async () => {
    const userData = userSession.getUser(); // Retrieve user data from session
    
    if (!userData) {
      router.push("/Customer/customerLogin"); // Redirect to login if not logged in
      return;
    }

    const selectedQuantity = prompt("Enter quantity:", "1"); // Ask for quantity
    if (selectedQuantity) {
      setQuantity(parseInt(selectedQuantity)); // Set quantity if user provides input
      try {
        await axios.post("/api/Customer/addToCart", {
          userData,
          productId,
          quantity: parseInt(selectedQuantity),
        });
        alert("Item added to cart successfully!");
      } catch (err) {
        console.error("Error adding product to cart:", err);
        alert("Failed to add item to cart.");
      }
    }
  };

  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <h2 className="card-price">Rs {price}</h2>
        <button className="card-button" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
