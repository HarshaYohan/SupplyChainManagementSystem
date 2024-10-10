"use client";
import React from "react";
import Navbar from "./components/navbar.jsx";
import Card from "./components/itemsCard.jsx";
import "../styles/product.css";
import "./global.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const handleProducts = async () => {
      try {
        const response = await axios.get("/api/product");
        setProductData(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleProducts();
  }, []);

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
          {productData && productData.length > 0 ? (
            productData.map((product) => (
              <Card
                key={product.ProductID}
                productId={product.ProductID} // Pass the ProductID as a prop
                title={product.ProductName}
                price={product.Price}
                image={product.productURL} // Assuming you have an image URL in your product data
              />
            ))
          ) : (
            <p>No products available</p> // Fallback if there are no products
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
