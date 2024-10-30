// pages/company-manager.js
"use client";
import { useState } from "react";
import axios from "axios";
import "../../../../styles/employee/companyManager.css";
import Navbar from "../../../Employee/components/navbarEmployee.jsx";
import StoreCard from "../../components/storeDetails.jsx";
import { useRouter } from "next/navigation";

const CompanyManagerHome = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);
  const [employee, setEmployee] = useState({
    name: "",
    contact: "",
    address: "",
    role: "",
    store: "",
    email: "",
    password: "",
  });

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await axios.post("/api/Employee/products", product);
    setActiveTab(null); // Close the tab after submission
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    await axios.post("/api/Employee/employees", employee);
    setEmployee({
      name: "",
      contact: "",
      address: "",
      role: "",
      store: "",
      email: "",
      password: "",
    });
    alert("Employee Added Successfully!");
    setActiveTab(true); // Close the tab after submission
  };

  const handleTransportProduct = async (e) => {
    e.preventDefault();
    await axios.post("/api/Employee/transport", transport);
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
            <select
              id="role"
              name="role"
              required
              value={employee.role}
              onChange={(e) =>
                setEmployee({ ...employee, role: e.target.value })
              }
            >
              <option value="Select Role">Select Role</option>
              <option value="Store Manager">Store Manager</option>
              <option value="Driver">Driver</option>
              <option value="Driver Assistant">Driver Assistant</option>
            </select>
            <select
              id="store"
              name="store"
              value={employee.store}
              onChange={(e) =>
                setEmployee({ ...employee, store: e.target.value })
              }
            >
              <option value="Select Store">Select Store</option>
              <option value="Colombo">Colombo</option>
              <option value="Negombo">Negombo</option>
              <option value="Galle">Galle</option>
              <option value="Matara">Matara</option>
              <option value="Badulla">Badulla</option>
              <option value="Anuradhapura">Anuradhapura</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Trincomalee">Trincomalee</option>
            </select>
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
            <button className="Add-employee" type="submit">Add Employee</button>
          </form>
        );
      case "reportGenerating":
        router.push("/Employee/CompanyManager/Reports");
        break;
      case "transportHandling":
        router.push("/Employee/CompanyManager/TransportProduct");
        break;
      default:
        return <p className="placeholder-text">Welcome To Logistic Management!</p>;
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

export default CompanyManagerHome;
