// components/QuarterlySales.js
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/employee/reports.css";

const CustomerOrderSales = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get("/api/Employee/custome_order_sales");
        setSalesData(response.data);
      } catch (err) {
        setError("Failed to load sales data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  if (loading) {
    return <p className="loading-text">Loading sales data...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  const generateCSV = () => {
    const headers = [
      "Customer ID",
      "Customer Name",
      "Order ID",
      "Order Date",
      "Total Amount",
    ];
    const rows = salesData.map((sales) => [
      sales.CustomerID,
      sales.CustomerName,
      sales.OrderID,
      sales.OrderDate,
      sales.TotalAmount,
    ]);

    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "quarterly_sales_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          {salesData.map((sales, index) => (
            <tr key={index}>
              <td>{sales.CustomerID}</td>
              <td>{sales.CustomerName}</td>
              <td>{sales.OrderID}</td>
              <td>{sales.OrderDate.split("T")[0]}</td>
              <td>{sales.TotalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={generateCSV} className="download-button">
        Download Report
      </button>
    </div>
  );
};

export default CustomerOrderSales;
