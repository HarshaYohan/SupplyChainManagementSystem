// components/Product.jsx
"use client";
import React from "react";
import Navbar from "../components/navbar.jsx";
import Card from "../components/itemsCard.jsx";
import "../../styles/product.css"; // Ensure this path is correct
import "../global.css"; // Global styles, if any

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
  {
    title: "Product 7",
    description: "Description of Product 7.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Product 8",
    description: "Description of Product 8.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Product 9",
    description: "Description of Product 9.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Product 10",
    description: "Description of Product 10.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Product 11",
    description: "Description of Product 11.",
    image: "https://via.placeholder.com/150",
  },
];

function Product() {
  return (
    <div>
      <Navbar />
      <div className="BodySection">
        <div className="GreetingSection">
          <h1>WELCOME!</h1>
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
