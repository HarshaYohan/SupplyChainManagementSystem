"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faTruck, faUserTie, faBoxOpen, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Added logout icon
import axios from "axios";
import "../../../styles/employee/storeManager.css";

const StoreManager = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);
  const [storeDetails, setStoreDetails] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [assistants, setAssistants] = useState([]);
  const [productOrders, setProductOrders] = useState([]);
  const [activeSection, setActiveSection] = useState("home");
  const [name, setName] = useState("");

  useEffect(() => {
    setDrivers([
      { id: 1, name: "John Doe", contact: "123-456-7890", email: "john.doe@example.com", weeklyHours: 40 },
      { id: 2, name: "Jane Smith", contact: "987-654-3210", email: "jane.smith@example.com", weeklyHours: 35 },
    ]);

    setAssistants([
      { id: 1, name: "Mike Johnson", contact: "555-123-4567", email: "mike.johnson@example.com", weeklyHours: 30 },
      { id: 2, name: "Emily Davis", contact: "555-987-6543", email: "emily.davis@example.com", weeklyHours: 25 },
    ]);

    setProductOrders([
      { orderId: 101, orderDate: "2023-10-01", deliveryDate: "2023-10-05", assignedDriver: "" },
      { orderId: 102, orderDate: "2023-10-02", deliveryDate: "2023-10-06", assignedDriver: "" },
    ]);
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      if (storedUserData && storedUserData.role === "Store Manager") {
        setUserDetails(storedUserData);
        console.log("User details: ", storedUserData);
      } else {
        router.push("/EmployeeLogin"); // Redirect to login if not logged in or not a store manager
      }
    };

    fetchUserDetails();
  }, [router]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userDetails && userDetails.email) {
        try {
          // Fetch the manager details, including name, from backend
          const storeRes = await axios.post("/api/Employee/getStoreManager", { email: userDetails.email });
          // Set fetched name to userDetails
          setName(storeRes.data.name);
        } catch (error) {
          console.error("Failed to fetch store data", error);
        }
      }
    };

    if (userDetails) {
      fetchUserData();
    }
  }, [userDetails]);

  // Function to handle toggling of the assigned driver
  const assignDriver = (orderId, selectedDriverId) => {
    setProductOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === orderId
          ? {
              ...order,
              assignedDriver: order.assignedDriver === selectedDriverId ? "" : selectedDriverId, // Toggle logic
            }
          : order
      )
    );
  };

  // Logout handler
  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("userData");
    // Redirect to login
    router.push("/Employee/EmployeeLogin");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="greeting">
            <h2>Welcome, {name}!</h2>
            <p>Select a section from the sidebar to manage your store.</p>
          </div>
        );

      case "myStore":
        return (
          storeDetails && (
            <div className="store-details">
              <h2>My Store</h2>
              <p>
                <strong>ID:</strong> {storeDetails.id}
              </p>
              <p>
                <strong>Address:</strong> {storeDetails.address}
              </p>
              <p>
                <strong>City:</strong> {storeDetails.city}
              </p>
              <p>
                <strong>Railway Contact:</strong> {storeDetails.railWayContact}
              </p>
            </div>
          )
        );

      case "drivers":
        return (
          <div className="drivers-list">
            <h2>Drivers</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Weekly Hours</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver) => (
                  <tr key={driver.id}>
                    <td>{driver.id}</td>
                    <td>{driver.name}</td>
                    <td>{driver.contact}</td>
                    <td>{driver.email}</td>
                    <td>{driver.weeklyHours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "assistants":
        return (
          <div className="assistants-list">
            <h2>Assistants</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Weekly Hours</th>
                </tr>
              </thead>
              <tbody>
                {assistants.map((assistant) => (
                  <tr key={assistant.id}>
                    <td>{assistant.id}</td>
                    <td>{assistant.name}</td>
                    <td>{assistant.contact}</td>
                    <td>{assistant.email}</td>
                    <td>{assistant.weeklyHours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "products":
        return (
          <div className="products-section">
            <h2>Product Orders</h2>
            <table className="product-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Delivery Date</th>
                  <th>Assign Driver</th>
                </tr>
              </thead>
              <tbody>
                {productOrders.map((order) => (
                  <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.deliveryDate}</td>
                    <td>
                      <select
                        value={order.assignedDriver}
                        onChange={(e) => assignDriver(order.orderId, e.target.value)}
                      >
                        <option value="">Select Driver</option>
                        {drivers.map((driver) => (
                          <option key={driver.id} value={driver.id}>
                            {driver.name}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return <p>Select a section from the sidebar to manage your store.</p>;
    }
  };

  return (
    <div className="store-manager-wrapper">
      <div className="sidebar">
        <h3 onClick={() => setActiveSection("home")}>Store Manager</h3>
        <ul>
          <li>
            <button onClick={() => setActiveSection("myStore")}>
              <FontAwesomeIcon icon={faStore} /> My Store
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("drivers")}>
              <FontAwesomeIcon icon={faTruck} /> Drivers
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("assistants")}>
              <FontAwesomeIcon icon={faUserTie} /> Assistants
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("products")}>
              <FontAwesomeIcon icon={faBoxOpen} /> Products
            </button>
          </li>
        </ul>
        {/* Add the Logout button at the bottom of the sidebar */}
        <div className="logout-section">
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /></button>
        </div>
      </div>
      <div className="store-manager-container">{renderContent()}</div>
    </div>
  );
};

export default StoreManager;
