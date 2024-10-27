"use client";
import "../../../styles/customer/orders.css";
import Navbar from "../components/navbar.jsx";
import "../../global.css";
import { useState, useEffect } from "react";
import axios from "axios";
import UserSession from "../../../utils/userSession";

function Orders() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState([]);
  const [selectedOrderProducts, setSelectedOrderProducts] = useState([]);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedOrderID, setSelectedOrderID] = useState(null); // Store the selected OrderID

  // Retrieve user session data
  const userSession = UserSession.getUser();
  const userId = userSession?.userId;

  // Fetch orders once userId is available
  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId) {
        setError("User not logged in.");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching orders for userId:", userId);
        const response = await axios.post("/api/Customer/fetchCustomerOrders", {
          customerID: userId,
        });

        if (response.data.length === 0) {
          setError("No orders found.");
        } else {
          const sortedOrders = response.data.sort((a, b) => b.OrderID - a.OrderID);
          setOrders(sortedOrders);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  const fetchOrderProducts = async (orderID) => {
    try {
      console.log("Fetching products for orderID:", orderID);
      const response = await axios.post("/api/Customer/fetchOrderProducts", {
        orderID,
      });

      setSelectedOrderProducts(response.data);
      setSelectedOrderID(orderID); // Set the selected OrderID
      setShowModal(true); // Show the modal
    } catch (err) {
      console.error("Failed to fetch order products:", err);
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
    setSelectedOrderProducts([]); // Clear previous order details
  };

  return (
    <div className="Container">
      {/* Navbar stays on top */}
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="BodySection">
        <h1>Your Orders</h1>
        <div className="ordersContainer">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div
                key={order.OrderID}
                className="orderCard"
                onClick={() => fetchOrderProducts(order.OrderID)}
              >
                <p className="orderDate">
                  Order Date: {new Date(order.OrderDate).toLocaleDateString()}
                </p>
                <p>Order ID: {order.OrderID}</p>
                <p>Status: {order.CurrentStatus}</p>
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>

        {/* Modal for order details */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              <h2>Order Details of Order {selectedOrderID}</h2>
              <ul>
                {selectedOrderProducts.map((product) => (
                  <li key={product.ProductID}>
                    {product.ProductName} - Quantity: {product.Quantity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
