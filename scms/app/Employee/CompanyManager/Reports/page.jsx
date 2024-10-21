// pages/company-manager.js
"use client";
import { useState } from "react";
import "../../../../styles/employee/companyManager.css";
import Navbar from "../../../Employee/components/navbarEmployee.jsx";
import QuarterlySales from "../../components/QuarterlySales";
import TopItems from "../../components/TopItems";
import CustomerOrders from "../../components/CustomerOrders";
import CityRouteSales from "../../components/CityRouteSales";
import DriverHours from "../../components/DriverHours";

const Reports = () => {
  const [activeTab, setActiveTab] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case "Report1":
        return <QuarterlySales />;
      case "Report2":
        return <TopItems />;
      case "Report3":
        return <CustomerOrders />;
      case "Report4":
        return <CityRouteSales />;
      case "Report5":
        return <DriverHours />;
      default:
        return (
          <p className="placeholder-text">Select a report from the sidebar</p>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <div className="sidebar">
          <button
            onClick={() => setActiveTab("Report1")}
            className={activeTab === "Report1" ? "active" : ""}
          >
            Quarterly Sales Report
          </button>
          <button
            onClick={() => setActiveTab("Report2")}
            className={activeTab === "Report2" ? "active" : ""}
          >
            Top Items Report
          </button>
          <button
            onClick={() => setActiveTab("Report3")}
            className={activeTab === "Report3" ? "active" : ""}
          >
            Customer-Order Sales Report
          </button>
          <button
            onClick={() => setActiveTab("Report4")}
            className={activeTab === "Report4" ? "active" : ""}
          >
            City-Route Sales Report
          </button>
          <button
            onClick={() => setActiveTab("Report5")}
            className={activeTab === "Report5" ? "active" : ""}
          >
            DriverHours Report
          </button>
        </div>
        <div className="body">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Reports;
