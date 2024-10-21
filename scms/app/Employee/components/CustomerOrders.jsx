// components/QuarterlySales.js
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/employee/reports.css";

const CustomerOrderSales = () => {
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
      <h2>Customer-Order Sales Report</h2>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerOrderSales;
