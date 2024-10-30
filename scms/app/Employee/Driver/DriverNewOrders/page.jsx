
"use client";
import React, { useState, useEffect } from "react";
import Drivernavbar from "../../components/Drivernavbar";
import axios from "axios";
import "../../../../styles/employee/DriverNewOrders.css"; // Adjust the path as needed

const NewWork = () => {
  const [orders, setOrders] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const value = localStorage.getItem("userData");

        if (!value) {
          throw new Error("No user data found in localStorage");
        }

        const { email } = JSON.parse(value);
        const response = await axios.post("/api/Employee/Driver/Driverorder", {
          email,
        });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const data = response.data;
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error.message || error);
        setError(error.message || "Error fetching orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  const startDelivery = async (id) => {
    try {
      const response = await fetch(`/api/Employee/Driver/Drivercon?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Delivered" }),
      });

      if (!response.ok) {
        throw new Error("Failed to confirm order");
      }

      const updatedOrders = orders.filter((order) => order.OrderID != id);
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  if (loading) {
    return <p>Loading orders...</p>;
  }

  console.log(orders);
  // Display a title when there are no orders
  return (
    <div className="RR">
      <Drivernavbar/>
    <div className="orders">
    
      <h1 className="title1">Orders</h1>
      {orders.length === 0 ? (
        <h2>No orders available</h2>
      ) : (
        <ul className="orderList">
          {orders.map((order) => (
            <li key={order.OrderID} className="orderItem">
              <div className="orderCard">
                <h2 className="orderTitle">Order ID: {order.OrderID}</h2>
                <p className="orderStatus">Status: {order.CurrentStatus}</p>
                <div className="buttonContainer">
                  <button
                    onClick={() => toggleDetails(order.OrderID)}
                    className="toggleButton"
                  >
                    {visibleDetails === order.OrderID
                      ? "Hide Details"
                      : "Show Details"}
                  </button>
                  <button
                    onClick={() => startDelivery(order.OrderID)}
                    disabled={order.CurrentStatus !== "Out for Final Delivery"}
                    className={
                      order.CurrentStatus === "Out for Final Delivery"
                        ? "startButton"
                        : "disabledButton"
                    }
                  >
                    Confirm
                  </button>
                </div>
                {visibleDetails === order.OrderID && (
                  <div className="detailsContainer">
                    <p className="detailsText">
                      Customer: {order.CustomerName}
                    </p>
                    <p className="detailsText">
                      Address: {order.DeliveryAddress}
                    </p>
                    <p className="detailsText">
                      Truck Number: {order.TruckNumber}
                    </p>
                    <p className="detailsText">
                      Route Description: {order.RouteDescription}
                    </p>
                    <p className="detailsText">
                      Phone Number: {order.PhoneNumber}
                    </p>
                    
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default NewWork;
