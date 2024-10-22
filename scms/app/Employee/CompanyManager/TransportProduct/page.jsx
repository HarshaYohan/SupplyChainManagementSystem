"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../../styles/employee/trainSchedule.css";
import Navbar from "../../../Employee/components/navbarEmployee.jsx";

const TrainSchedule = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [trainDetails, setTrainDetails] = useState("");
  const [cityTrainDetails, setCityTrainDetails] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/Employee/fetchOrders");
        setOrderDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      }
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    const fetchTrainDetals = async () => {
      try {
        const response = await axios.get("/api/Employee/fetchTrainDetails");
        setTrainDetails(response.data);
      } catch (error) {
        console.log("failed to fetch train details", error);
      }
    };
    fetchTrainDetals();
  }, []);

  useEffect(() => {
    const fetchCityTrainDetails = async () => {
      try {
        const response = await axios.get("/api/Employee/fetchCityTrainDetails");
        setCityTrainDetails(response.data);
      } catch (error) {
        console.log("failed to fetch train details", error);
      }
    };
    fetchCityTrainDetails();
  }, []);

  const filteredOrders = orderDetails.filter((order) =>
    order.City.toString().includes(searchQuery)
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Orders":
        return (
          <div className="orders-container">
            <h2>Pending Orders</h2>

            {/* Search Box */}
            <input
              type="text"
              placeholder="Search by City"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-box"
            />

            <div className="orders-list">
              {filteredOrders.map((order, index) => (
                <div key={index} className="order-box">
                  <div className="order-item">
                    <strong>Order ID:</strong> {order.OrderID}
                  </div>
                  <div className="order-item">
                    <strong>Customer ID:</strong> {order.CustomerID}
                  </div>
                  <div className="order-item">
                    <strong>Train Capacity:</strong>{" "}
                    {order.TrainCapacityConsumption}
                  </div>
                  <div className="order-item">
                    <strong>Order Date:</strong> {order.oDate}
                  </div>
                  <div className="order-item">
                    <strong>City:</strong> {order.City}
                  </div>
                  <button>View Train Details</button>
                </div>
              ))}
            </div>
          </div>
        );
      case "TrainSchedule":
        return (
          <div>
            <h2>Train Schedule</h2>
            <table className="train-schedule-table">
              <thead>
                <tr>
                  <th>Train ID</th>
                  <th>Date</th>
                  <th>Capacity</th>
                  <th>Train</th>
                </tr>
              </thead>
              <tbody>
                {trainDetails.map((train, index) => (
                  <tr key={index}>
                    <td>{train.TrainScheduleID}</td>
                    <td>"Everyday"</td>
                    <td>{train.Capacity}</td>
                    <td>{train.Description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2>City-Train Details</h2>
            <table className="train-schedule-table">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Date</th>
                  <th>Allocated Capacity</th>
                  <th>Capacity</th>
                  <th>Train</th>
                </tr>
              </thead>
              <tbody>
                {cityTrainDetails.map((train, index) => (
                  <tr key={index}>
                    <td>{train.CityName}</td>
                    <td>"Everyday"</td>
                    <td>{train.AllocatedCapacity}</td>
                    <td>{train.Capacity}</td>
                    <td>{train.Train}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return <p className="placeholder-text">Please select a tab</p>;
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <div className="sidebar">
          <button onClick={() => setActiveTab("Orders")}>Pending Orders</button>
          <button onClick={() => setActiveTab("TrainSchedule")}>
            Train Schedule
          </button>
        </div>
        <div className="body">{renderContent()}</div>
      </div>
    </div>
  );
};

export default TrainSchedule;
