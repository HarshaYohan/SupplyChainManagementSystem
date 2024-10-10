// pages/company-manager.js
"use client";
import { useState } from "react";
import axios from "axios";
import "../../styles/companyManager.css";
import Navbar from "../components/navbar.jsx";
import StoreCard from "../components/storeDetails.jsx";

const CompanyManager = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [employee, setEmployee] = useState({
    name: "",
    contact: "",
    address: "",
    role: "",
    email: "",
    password: "",
  });

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await axios.post("/api/products", product);
    // Handle success/failure notification
    setActiveTab(null); // Close the tab after submission
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    await axios.post("/api/employees", employee);
    setEmployee({
      name: "",
      contact: "",
      address: "",
      role: "",
      email: "",
      password: "",
    });
    setActiveTab(null); // Close the tab after submission
  };

  const handleTransportProduct = async (e) => {
    e.preventDefault();
    await axios.post("/api/transport", transport);
    // Handle success/failure notification
    setActiveTab(null); // Close the tab after submission
  };

  const renderContent = () => {
    switch (activeTab) {
      case "viewStores":
        return <StoreCard />;
      case "addEmployee":
        return (
          <form onSubmit={handleAddEmployee} className="form-container">
            <h2>Add Employee</h2>
            <input
              type="text"
              placeholder="Employee Name"
              required
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Contact"
              required
              value={employee.contact}
              onChange={(e) =>
                setEmployee({ ...employee, contact: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Address"
              required
              value={employee.address}
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Role"
              required
              value={employee.role}
              onChange={(e) =>
                setEmployee({ ...employee, role: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Email"
              required
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Password"
              required
              value={employee.password}
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
            <button type="submit">Add Employee</button>
          </form>
        );
      case "reportGenerating":
        return (
          <form onSubmit={handleAddProduct} className="form-container">
            <h2>Report Generating</h2>

            <ol>
              <li>Quarterly sales report for a given year</li>
              <li>Items with most orders</li>
              <li>
                Sales report categorized according to main cities and routes
              </li>
              <li>Customer - order report</li>
              <li>
                {" "}
                Working Hours of Drivers/ Driver Assistants and Used hours of
                Trucks{" "}
              </li>
            </ol>
          </form>
        );
      case "transportHandling":
        return (
          <form onSubmit={handleTransportProduct} className="form-container">
            <h2>Transport Product</h2>
            <button>View Store Details</button>
            <button>View Train Schedule</button>
            <button type="submit">Transport Product</button>
          </form>
        );
      default:
        return <p className="placeholder-text"></p>;
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <div className="sidebar">
          <button onClick={() => setActiveTab("viewStores")}>Stores</button>

          <button onClick={() => setActiveTab("reportGenerating")}>
            Reports
          </button>
          <button onClick={() => setActiveTab("transportHandling")}>
            Transport Handling
          </button>
          <button onClick={() => setActiveTab("addEmployee")}>
            Add Employee
          </button>
          {/* Add more buttons for other functionalities as needed */}
        </div>
        <div className="body">{renderContent()}</div>
      </div>
    </div>
  );
};

export default CompanyManager;
