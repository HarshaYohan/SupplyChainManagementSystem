
"use client";
import React, { useEffect, useState } from "react";
import Drivernavbar from "../../components/Drivernavbar";
import axios from "axios";
import "../../../../styles/employee/DriverDeliverdOrders.css"; 

const DeliveredItems = () => {
  const [deliveredItems, setDeliveredItems] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchDeliveredOrders = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (!userData) {
          throw new Error("User data not found in localStorage.");
        }

        const { email } = userData; 

        const response = await fetch(
          `/api/Employee/Driver/DriverDeliverddata`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }), 
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
      setVisibleDetails(null); 
    } else {
      setVisibleDetails(OrderID); 
    }
  };

  return (
    <div>
   <Drivernavbar/>
    <div className="orders">
      <h1 className="title3">Delivered Items</h1>

      {error && <p className="error"><h2>No Avaiable</h2></p>}

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
                    Truck  Number: {order.TruckNumber}
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
    </div>
  );
};

export default DeliveredItems;
