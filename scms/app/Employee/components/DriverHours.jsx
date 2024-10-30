"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/employee/reports.css";

const DriverHours = () => {
  const [driverData, setDriverData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        const response = await axios.get("/api/Employee/driver_hours");
        setDriverData(response.data);
      } catch (err) {
        console.error("Error fetching driver data:", err);
        setError("Failed to load driver data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDriverData();
  }, []);

  if (loading) {
    return <p className="loading-text">Loading driver data...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  const generateCSV = () => {
    const headers = [
      "Driver ID",
      "Assistant ID",
      "Truck ID",
      "Start Time",
      "End Time",
    ];
    const rows = driverData.map((data) => [
      data.DriverID,
      data.AssistantID,
      data.TruckID,
      data.StartTime,
      data.EndTime,
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
          {driverData.map((data, index) => (
            <tr key={index}>
              <td>{data.DriverID}</td>
              <td>{data.AssistantID}</td>
              <td>{data.TruckID}</td>
              <td>{data.StartTime}</td>
              <td>{data.EndTime}</td>
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

export default DriverHours;
