"use client";
import React from "react";
import Navbar from "./components/navbar.jsx";
import Card from "./components/itemsCard.jsx";
import "../styles/product.css";
import "./global.css";

const productData = [
  {
    title: "Product 1",
    description: "Description of Product 1.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Product 2",
    description: "Description of Product 2.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Product 3",
    description: "Description of Product 3.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Product 4",
    description: "Description of Product 4.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Product 5",
    description: "Description of Product 5.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Product 6",
    description: "Description of Product 6.",
    image: "https://via.placeholder.com/150",
  },
];

function Product() {
  return (
    <div>
      <Navbar />
      <div className="BodySection">
        <div className="GreetingSection">
          <div className="GreetingBox">
            <h1>Welcome to RAILTRUX!</h1>
            <p>Your journey in supply chain management starts here.</p>
          </div>
        </div>
        <div className="ProductSection">
          {productData.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
