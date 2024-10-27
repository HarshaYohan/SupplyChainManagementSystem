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
    </div>
  );
};

export default DriverHours;