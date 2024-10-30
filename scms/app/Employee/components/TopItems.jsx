// components/QuarterlySales.js
"use client";
import { useState,useEffect } from "react";
import "../../../styles/employee/reports.css";
import axios from "axios";

const TopItemsSales = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get("/api/Employee/top_Items_report");
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
    const headers = ["Product ID", "Product Name", "Quantity"];
    const rows = salesData.map(item => [item.ProductID, item.ProductName, item.Quantity]);

    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
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
      <h2>Top Items Sales Report</h2>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map(item => (
            <tr key={item.ProductID}>
              <td>{item.ProductID}</td>
              <td>{item.ProductName}</td>
              <td>{item.Quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button onClick={generateCSV} className="download-button">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default TopItemsSales;
