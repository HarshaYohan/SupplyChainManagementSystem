/*'use client';
import React from 'react';
import "../../../../styles/employee/DriverDeliverdOrders.css"; // Import regular CSS

const DeliveredItems = () => {
    const deliveredItems = [
      { id: 1, name: 'Order 1', date: '2024-10-01' },
      { id: 2, name: 'Order 2', date: '2024-10-02' },
      { id: 3, name: 'Order 3', date: '2024-10-03' },
    ];
  
    const handleShowDetails = (id) => {
      alert(`Showing details for Item ${id}`);
    };
  
    return (
      <div className="orders">
        <h1 className="title2">Delivered Items</h1>
        <ul className="orderList">
          {deliveredItems.map((item) => (
            <li key={item.id} className="orderItem">
              <div className="orderCard">
                <div className="orderText">
                  {item.name} - Delivered on {item.date}
                </div>
                <div className="buttonContainer">
                  <button
                    className="toggleButton"
                    onClick={() => handleShowDetails(item.id)}
                  >
                    Show Details
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DeliveredItems;
  */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../../styles/employee/DriverDeliverdOrders.css"; // Your CSS path

const DeliveredItems = () => {
  const [deliveredItems, setDeliveredItems] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState(null); // State to track visible details
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch delivered orders when the component is mounted
  useEffect(() => {
    const fetchDeliveredOrders = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (!userData) {
          throw new Error("User data not found in localStorage.");
        }

        const { email } = userData; // Assuming email is part of the stored user data

        const response = await fetch(
          `/api/Employee/Driver/DriverDeliverddata`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }), // Send the email only
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch delivered orders.");
        }

        const data = await response.json();
        setDeliveredItems(data);
      } catch (error) {
        console.error("Error fetching delivered orders:", error);
        setError(error.message);
      }
    };

    fetchDeliveredOrders();
  }, []);

  const toggleDetails = async (OrderID) => {
    if (visibleDetails === OrderID) {
      setVisibleDetails(null); // Hide details if already visible
    } else {
      setVisibleDetails(OrderID); // Show the details of the current order
    }
  };

  return (
    <div className="orders">
      <h1 className="title2">Delivered Items</h1>

      {error && <p className="error">{error}</p>}

      <ul className="orderList">
        {deliveredItems.map((order) => (
          <li key={order.OrderID} className="orderItem">
            <div className="orderCard">
              <h2 className="orderTitle">Order ID: {order.OrderID}</h2>

              <div className="buttonContainer">
                <button
                  onClick={() => toggleDetails(order.OrderID)}
                  className="toggleButton"
                >
                  {visibleDetails === order.OrderID
                    ? "Hide Details"
                    : "Show Details"}
                </button>
              </div>

              {isLoading && visibleDetails === order.OrderID && (
                <p>Loading details...</p>
              )}

              {visibleDetails === order.OrderID && (
                <div className="detailsContainer">
                  <p className="detailsText">Customer: {order.CustomerName}</p>
                  <p className="detailsText">
                    Address: {order.DeliveryAddress}
                  </p>
                  <p className="detailsText">
                    Route Description: {order.RouteDescription}
                  </p>
                  <p className="detailsText">
                    Phone Number: {order.PhoneNumber}
                  </p>
                  <p className="detailsText">
                    Delivery Date:{" "}
                    {new Date(order.DeliveryDate).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveredItems;
