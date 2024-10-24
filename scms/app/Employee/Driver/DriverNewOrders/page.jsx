/*'use client';
import React, { useState } from 'react';
import "../../../../styles/employee/DriverNewOrders.css";

const NewWork = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      title: 'Order 1',
      details: 'Details of order 1',
      status: 'Pending',
      deliveryDate: '2024-10-10',
      customerName: 'John Doe',
      address: '123 Main St, City, Country',
      phoneNumber: '123-456-7890'
    },
    {
      id: 2,
      title: 'Order 2',
      details: 'Details of order 2',
      status: 'Pending',
      deliveryDate: '2024-10-12',
      customerName: 'Jane Smith',
      address: '456 Elm St, City, Country',
      phoneNumber: '987-654-3210'
    },
    {
      id: 3,
      title: 'Order 3',
      details: 'Details of order 3',
      status: 'Pending',
      deliveryDate: '2024-10-15',
      customerName: 'Alice Johnson',
      address: '789 Oak St, City, Country',
      phoneNumber: '555-123-4567'
    },
  ]);

  const [visibleDetails, setVisibleDetails] = useState(null);

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  const startDelivery = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: 'Ended' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="orders">
      <h1 className="title1">Orders</h1>
      <ul className="orderList">
        {orders.map((order) => (
          <li key={order.id} className="orderItem">
            <div className="orderCard">
              <h2 className="orderTitle">{order.title}</h2>
              <p className="orderStatus">Status: {order.status}</p>
              <div className="buttonContainer">
                <button
                  onClick={() => toggleDetails(order.id)}
                  className="toggleButton"
                >
                  {visibleDetails === order.id ? 'Hide Details' : 'Show Details'}
                </button>
                <button
                  onClick={() => startDelivery(order.id)}
                  disabled={order.status !== 'Pending'}
                  className={order.status === 'Pending' ? 'startButton' : 'disabledButton'}
                >
                  Confirm
                </button>
              </div>
              {visibleDetails === order.id && (
                <div className="detailsContainer">
                  <p className="detailsText">Order ID: {order.id}</p>
                  <p className="detailsText">Details: {order.details}</p>
                  <p className="detailsText">Customer: {order.customerName}</p>
                  <p className="detailsText">Address: {order.address}</p>
                  <p className="detailsText">Phone Number: {order.phoneNumber}</p>
                  <p className="detailsText">Delivery Date: {order.deliveryDate}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewWork;
*/
/*
'use client';
import React, { useState, useEffect } from 'react';
import "../../../../styles/employee/DriverNewOrders.css"; // Adjust the path as needed

const NewWork = () => {
  const [orders, setOrders] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/Employee/Driver/Driverorder');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log fetched data
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  const startDelivery = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: 'Ended' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="orders">
      <h1 className="title1">Orders</h1>
      <ul className="orderList">
        {orders.map((order) => (
          <li key={order.id} className="orderItem">
            <div className="orderCard">
              <h2 className="orderTitle">Order ID: {order.id}</h2>
              <p className="orderStatus">Status: {order.status}</p>
              <div className="buttonContainer">
                <button
                  onClick={() => toggleDetails(order.id)}
                  className="toggleButton"
                >
                  {visibleDetails === order.id ? 'Hide Details' : 'Show Details'}
                </button>
                <button
                  onClick={() => startDelivery(order.id)}
                  disabled={order.status !== 'Pending'}
                  className={order.status === 'Pending' ? 'startButton' : 'disabledButton'}
                >
                  Confirm
                </button>
              </div>
              {visibleDetails === order.id && (
                <div className="detailsContainer">
                  <p className="detailsText">Customer: {order.customerName}</p>
                  <p className="detailsText">Address: {order.address}</p>
                  <p className="detailsText">Phone Number: {order.phoneNumber}</p>
                  <p className="detailsText">Delivery Date: {new Date(order.DeliveryDate).toLocaleDateString()}</p>

                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewWork;
*/
/*
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../../styles/employee/DriverNewOrders.css"; // Adjust the path as needed

const NewWork = () => {
  const [orders, setOrders] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const value = localStorage.getItem("userData");
        const { email } = JSON.parse(value);
        const response = await axios.post("/api/Employee/Driver/Driverorder", {
          email,
        });

        if (response.status != 200) {
          throw new Error("Network response was not ok");
        }
        // console.log(response);
        const data = await response.data;
        console.log("Fetched data:", data); // Log fetched data
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  // Function to start the delivery (update status)
  const startDelivery = async (id) => {
    try {
      const response = await fetch(`/api/Employee/Driver/Drivercon?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Delivered" }), // Correctly use the string "Delivered"
      });

      if (!response.ok) {
        throw new Error("Failed to confirm order");
      }

      // Update the frontend state
      const updatedOrders = orders.map((order) =>
        order.id === id ? { ...order, status: "Delivered" } : order
      );
      setOrders(updatedOrders);
      console.log(`Order ${id} status updated to Delivered`); // Log success message
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  return (
    <div className="orders">
      <h1 className="title1">Orders</h1>
      <ul className="orderList">
        {orders.map((order) => (
          <li key={order.id} className="orderItem">
            <div className="orderCard">
              <h2 className="orderTitle">Order ID: {order.id}</h2>
              <p className="orderStatus">Status: {order.status}</p>
              <div className="buttonContainer">
                <button
                  onClick={() => toggleDetails(order.id)}
                  className="toggleButton"
                >
                  {visibleDetails === order.id
                    ? "Hide Details"
                    : "Show Details"}
                </button>
                <button
                  onClick={() => startDelivery(order.id)}
                  disabled={order.status !== "Out for Final Delivery"}
                  className={
                    order.status === "Out for Final Delivery"
                      ? "startButton"
                      : "disabledButton"
                  }
                >
                  Confirm
                </button>
              </div>
              {visibleDetails === order.id && (
                <div className="detailsContainer">
                  <p className="detailsText">Customer: {order.customerName}</p>
                  <p className="detailsText">Address: {order.address}</p>
                  <p className="detailsText">
                    Phone Number: {order.phoneNumber}
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

export default NewWork;
*/

/*
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../../styles/employee/DriverNewOrders.css"; // Adjust the path as needed

const NewWork = () => {
  const [orders, setOrders] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true); // Set loading to true when fetching starts
        const value = localStorage.getItem("userData");
        
        // Check if the value is found in localStorage
        if (!value) {
          throw new Error("No user data found in localStorage");
        }

        const { email } = JSON.parse(value);
        console.log("Fetching orders for email:", email); // Log the email

        const response = await axios.post("/api/Employee/Driver/Driverorder", {
          email,
        });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const data = response.data; // Use response.data without awaiting
        console.log("Fetched data:", data); // Log fetched data
        setOrders(data);
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching orders:", error.message || error); // Log the error
        setError(error.message || "Error fetching orders"); // Set the error state
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchOrders();
  }, []);

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  // Function to start the delivery (update status)
  const startDelivery = async (id) => {
    try {
      const response = await fetch(`/api/Employee/Driver/Drivercon?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Delivered" }), // Correctly use the string "Delivered"
      });

      if (!response.ok) {
        throw new Error("Failed to confirm order");
      }

      // Update the frontend state
      const updatedOrders = orders.map((order) =>
        order.id === id ? { ...order, status: "Delivered" } : order
      );
      setOrders(updatedOrders);
      console.log(`Order ${id} status updated to Delivered`); // Log success message
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  if (loading) {
    return <p>Loading orders...</p>; // Show loading state while fetching
  }

  if (error) {
    return <p className="error">Error: {error}</p>; // Show error message
  }

  return (
    <div className="orders">
      <h1 className="title1">Orders</h1>
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
                  disabled={order.CurrentStatus!== 'Out for Final Delivery'}
                  className={
                    order.CurrentStatus === 'Out for Final Delivery'
                      ? "startButton"
                      : "disabledButton"
                  }
                >
                  Confirm
                </button>
              </div>
              {visibleDetails === order.OrderID && (
                <div className="detailsContainer">
                  <p className="detailsText">Customer: {order.CustomerName}</p>
                  <p className="detailsText">Address: {order.DeliveryAddress}</p>
                  <p className="detailsText">RouteDescription: {order.RouteDescription}</p>
                  <p className="detailsText">
                    Phone Number: {order.PhoneNumber}
                  </p>
                  <p className="detailsText">
                    Delivery Date:{" "}
                    {new Date(order.Deliverydate).toLocaleDateString()}
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

export default NewWork;
*/
"use client";
import React, { useState, useEffect } from "react";
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

      const updatedOrders = orders.map((order) =>
        order.id === id ? { ...order, status: "Delivered" } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  if (loading) {
    return <p>Loading orders...</p>;
  }

  // Display a title when there are no orders
  return (
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
                    {visibleDetails === order.OrderID ? "Hide Details" : "Show Details"}
                  </button>
                  <button
                    onClick={() => startDelivery(order.OrderID)}
                    disabled={order.CurrentStatus !== 'Out for Final Delivery'}
                    className={order.CurrentStatus === 'Out for Final Delivery' ? "startButton" : "disabledButton"}
                  >
                    Confirm
                  </button>
                </div>
                {visibleDetails === order.OrderID && (
                  <div className="detailsContainer">
                    <p className="detailsText">Customer: {order.CustomerName}</p>
                    <p className="detailsText">Address: {order.DeliveryAddress}</p>
                    <p className="detailsText">Route Description: {order.RouteDescription}</p>
                    <p className="detailsText">Phone Number: {order.PhoneNumber}</p>
                    <p className="detailsText">Delivery Date: {new Date(order.Deliverydate).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewWork;
