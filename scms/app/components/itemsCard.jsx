"use client";

import React from "react";
import axios from "axios";
import "../../styles/itemsCard.css";

function Card({ title, description, image, addToCart }) {
  const handleClick = async () => {
    try {
      const response = await axios.post("/api/product", {
        title,
        description,
      });
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={handleClick}>
          Show More
        </button>
      </div>
    </div>
  );
}

export default Card;
