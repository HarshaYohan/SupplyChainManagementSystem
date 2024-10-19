// components/QuarterlySales.js
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/employee/reports.css";

const DriverHours = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchSalesData = async () => {
  //     try {
  //       const response = await axios.get("/api/Employee/quarterly_sales");
  //       setSalesData(response.data);
  //     } catch (err) {
  //       setError("Failed to load sales data.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchSalesData();
  // }, []);

  // if (loading) {
  //   return <p className="loading-text">Loading sales data...</p>;
  // }

  // if (error) {
  //   return <p className="error-text">{error}</p>;
  // }

  return (
    <div className="quarterly-sales-container">
      <h2>Driver-Hours Report</h2>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Driver ID</th>
            <th>Assistant ID</th>
            <th>Truck ID</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default DriverHours;
