"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/itemsCard.css";

function Card({ productId, title, price, image }) {
  const [userData, setUserData] = useState(null);

  // useEffect to get user data only on component mount
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
    }
  }, []); // Empty dependency array to run only once when component mounts

  const handleClick = async () => {
 

    try {
      await axios.post("/api/addToCart", {
        userData, // Using shorthand property (will be the value of userData)
        productId, // Sending productId correctly as productId
      });
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}{" "}
      {/* Optional image display */}
      <div className="card-content">
        {/* <img src="../../R.jpeg"/> */}
        <h1 className="card-title">{title}</h1>
        <h2 className="card-price">${price}</h2>
        <button className="card-button" onClick={handleClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
