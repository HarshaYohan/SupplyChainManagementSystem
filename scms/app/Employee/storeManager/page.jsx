"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/storeManager.css";

const StoreManager = () => {
  const [activeSection, setActiveSection] = useState("myStore"); // State to toggle between sections

  // Hardcoded store details
  const [storeDetails, setStoreDetails] = useState({
    id: "#1234",
    address: "123, Store Street",
    city: "Store City",
    railWayContact: "9876543210",
  });

  // Hardcoded drivers details
  const [drivers, setDrivers] = useState([
    { id: "D001", name: "John Smith", contact: "555-1234", email: "john@example.com", weeklyHours: 40 },
    { id: "D002", name: "Jane Doe", contact: "555-5678", email: "jane@example.com", weeklyHours: 35 },
    { id: "D003", name: "Mark Johnson", contact: "555-8765", email: "mark@example.com", weeklyHours: 45 },
  ]);

  // Switch case for rendering different sections
  const renderContent = () => {
    switch (activeSection) {
      case "myStore":
        return (
          <div className="store-details">
            <h2>My Store</h2>
            <p><strong>ID:</strong> {storeDetails.id}</p>
            <p><strong>Address:</strong> {storeDetails.address}</p>
            <p><strong>City:</strong> {storeDetails.city}</p>
            <p><strong>RailWayContact:</strong> {storeDetails.railWayContact}</p>
          </div>
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
      default:
        return (
          <div>
            <h2>Section Content</h2>
            <p>This content will be updated based on the section clicked.</p>
          </div>
        );
    }
  };

  return (
    <div className="store-manager-wrapper">
      {/* Left-side Navbar */}
      <div className="sidebar">
        <h3>Store Manager</h3>
        <ul>
          <li>
            <button onClick={() => setActiveSection("myStore")}>My Store</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("drivers")}>Drivers</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("assistants")}>Assistants</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("products")}>Products</button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="store-manager-container">
        {renderContent()} {/* Content rendering based on switch case */}
      </div>
    </div>
  );
};

export default StoreManager;
