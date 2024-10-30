"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/employee/reports.css";

const cityList = [
  "Colombo",
  "Negombo",
  "Galle",
  "Matara",
  "Jaffna",
  "Trincomalee",
  "Badulla",
  "Anuradhapura",
];

export default function CityRouteSales() {
  const [city, setCity] = useState("");
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesData = async () => {
      if (!city) return;

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `/api/Employee/city_route_sales?city=${encodeURIComponent(city)}`
        );
        setSalesData(response.data);
      } catch (err) {
        setError("Failed to load sales data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const generateCSV = () => {
    const headers = ["City", "Route", "Total Sales"];
    const rows = salesData.map((data) => [
      data.City,
      data.Route,
      data.TotalSales,
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
      <h2>City-Route Sales Report</h2>
      <div className="mb-4">
        <select
          value={city}
          onChange={handleCityChange}
          className="city-select"
        >
          <option value="">Select a city</option>
          {cityList.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      </div>
      {loading && <p className="loading-text">Loading sales data...</p>}
      {error && <p className="error-text">{error}</p>}
      {!loading && !error && salesData.length > 0 && (
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
      )}
      {!loading && !error && salesData.length === 0 && city && (
        <p className="no-data-text">
          No sales data available for the selected city.
        </p>
      )}
      <button onClick={generateCSV} className="download-button">
        Download Report
      </button>
    </div>
  );
}
