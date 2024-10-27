// components/QuarterlySales.js
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/employee/reports.css";

const CityRouteSales = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get("/api/Employee/city_route_sales");
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

  return (
    <div className="quarterly-sales-container">
      <h2>City-Route Sales Report</h2>
      <table className="sales-table">
        <thead>
          <tr>
            <th>City</th>
            <th>Route</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((data, index) => (
            <tr key={index}>
              <td>{data.City}</td>
              <td>{data.Route}</td>
              <td>{data.TotalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityRouteSales;
