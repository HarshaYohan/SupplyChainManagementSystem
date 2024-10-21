// components/QuarterlySales.js
"use client";
import { useState } from "react";
import "../../../styles/employee/reports.css";

const TopItemsSales = () => {
  const [salesData, setSalesData] = useState([
    // Sample data, replace this with fetched data
    { productId: 1, productName: "Product A", quantity: 100 },
    { productId: 2, productName: "Product B", quantity: 80 },
    { productId: 3, productName: "Product C", quantity: 150 },
  ]);

  const generateCSV = () => {
    const headers = ["Product ID", "Product Name", "Quantity"];
    const rows = salesData.map(item => [item.productId, item.productName, item.quantity]);

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
            <tr key={item.productId}>
              <td>{item.productId}</td>
              <td>{item.productName}</td>
              <td>{item.quantity}</td>
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

export default TopItemsSales;
