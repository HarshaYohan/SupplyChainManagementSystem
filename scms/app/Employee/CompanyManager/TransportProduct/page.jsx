"use client";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "../../../../styles/employee/trainSchedule.css";
import Navbar from "../../../Employee/components/navbarEmployee.jsx";
import { CircleGauge } from "lucide-react";

const TrainSchedule = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [trainDetails, setTrainDetails] = useState([]);
  const [cityTrainDetails, setCityTrainDetails] = useState([]);
  const [rescheduledOrders, setRescheduledOrders] = useState([]);
  const [expandedOrderIndex, setExpandedOrderIndex] = useState(null);
  const [acknowledged, setAcknowledged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const currentDate = useMemo(() => new Date().toLocaleDateString(), []);
  const tomorrow = useMemo(
    () =>
      new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString(),
    []
  );

  const fetchData = async (url, setter) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setter(response.data);
    } catch (error) {
      setError(`Failed to fetch data from ${url}`);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData("/api/Employee/fetchOrders", setOrderDetails);
    fetchData("/api/Employee/fetchTrainDetails", setTrainDetails);
    fetchData("/api/Employee/fetchCityTrainDetails", setCityTrainDetails);
    fetchData("/api/Employee/fetchRescheduledOrders", setRescheduledOrders);
  }, []);

  const handleRescheduledOrders = async (order) => {
    try {
      const response = await axios.post("/api/Employee/rescheduleOrder", {
        OrderID: order.OrderID,
      });
      alert("Order rescheduled for another day successfully");
      fetchData("/api/Employee/fetchOrders", setOrderDetails);
      setRescheduledOrders(response.data);
    } catch (error) {
      console.error("Failed to reschedule order", error);
      alert("Failed to reschedule order");
    }
  };

  const handleClick = async (order, train) => {
    if (order.TrainCapacityConsumption > train.AllocatedCapacity) {
      alert("Rescheduling for another day...");
      handleRescheduledOrders(order);
    } else {
      try {
        await axios.post("/api/Employee/allocateTrain", {
          TrainID: train.TrainScheduleID,
          NewCapacity: train.AllocatedCapacity - order.TrainCapacityConsumption,
          City: order.City,
          OrderID: order.OrderID,
        });
        alert("Order allocated successfully");
        fetchData("/api/Employee/fetchOrders", setOrderDetails);
        fetchData("/api/Employee/fetchCityTrainDetails", setCityTrainDetails);
      } catch (error) {
        console.error("Failed to allocate order to train", error);
        alert("Failed to allocate order to train");
      }
    }
  };

  const handleEndWork = async () => {
    setAcknowledged(false);
    alert("All orders are assigned for tomorrow.");
    try {
      const response = await axios.post("/api/Employee/resetTrainDetails");
      setCityTrainDetails(response.data);
      fetchData("/api/Employee/fetchCityTrainDetails", setCityTrainDetails);
    } catch (error) {
      console.error("Failed to reset train details", error);
    }
  };

  const filteredOrders = useMemo(
    () =>
      orderDetails.filter((order) =>
        order.City.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [orderDetails, searchQuery]
  );

  const toggleOrderDetails = (index) => {
    setExpandedOrderIndex(expandedOrderIndex === index ? null : index);
  };

  const handleAcknowledge = () => {
    setAcknowledged(true);
  };
  const handleAddToPending = async (ID) => {
    try {
      alert("Adding the order to Pending List");
      await axios.post("/api/Employee/handleRescheduling", {
        OrderId: ID,
      });
      alert("Order added to pending orders");
      fetchData("/api/Employee/fetchRescheduledOrders", setRescheduledOrders);
    } catch (error) {
      console.error("Error adding to pending orders:", error);
      alert("Error adding to pending orders");
    }
  };

  const renderTrainDetails = (order) => (
    <div className="trainDetails-container">
      {cityTrainDetails
        .filter((train) => train.CityName === order.City)
        .map((train, ind) => (
          <div key={ind} className="train-box">
            <div className="train-item">
              <div>
                <strong>Train:</strong> {train.Description}
              </div>
              <div>
                <strong>Capacity:</strong> {train.Capacity || "N/A"}
              </div>
              <div>
                <strong>Allocated Capacity:</strong>{" "}
                {train.AllocatedCapacity || "N/A"}
              </div>
              <div>
                <button
                  onClick={() => handleClick(order, train)}
                  disabled={isLoading}
                  aria-label={`Add order ${order.OrderID} to train ${train.Description}`}
                >
                  {isLoading ? "Processing..." : "Add to Train"}
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );

  const renderContent = () => {
    if (error) {
      return <div className="error">{error}</div>;
    }

    switch (activeTab) {
      case "Orders":
        return (
          <div className="orders-container">
            <div className="head">
              <h2>Pending Orders</h2>
              <h2>
                <strong>Date :</strong> {currentDate}
              </h2>
            </div>
            <input
              type="text"
              placeholder="Search by City"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-box"
              aria-label="Search orders by city"
            />
            {isLoading ? (
              <p>Loading orders...</p>
            ) : (
              <div className="orders-list">
                {filteredOrders.map((order, index) => (
                  <div key={index} className="order-container">
                    <div className="order-box">
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
                      <button onClick={() => toggleOrderDetails(index)}>
                        {expandedOrderIndex === index
                          ? "Hide Train Details"
                          : "View Train Details"}
                      </button>
                    </div>
                    {expandedOrderIndex === index && renderTrainDetails(order)}
                  </div>
                ))}
              </div>
            )}
            <div>
              <p>
                If you are finished assigning orders for today, click the "End
                Order Assignment" button.
              </p>
              <button onClick={handleAcknowledge} disabled={acknowledged}>
                Confirm
              </button>
              <button onClick={handleEndWork} disabled={!acknowledged}>
                End Order Assignment
              </button>
            </div>
          </div>
        );

      case "RescheduleOrders":
        return (
          <div className="orders-list">
            <div className="order-container">
              <h2>Rescheduled Orders</h2>
              {rescheduledOrders.length > 0 ? (
                rescheduledOrders.map((order, index) => (
                  <div className="order-box" key={index}>
                    <div className="order-item">
                      <strong>Order ID:</strong> {order.OrderID}
                    </div>
                    <div className="order-item">
                      <strong>Customer ID:</strong> {order.CustomerID}
                    </div>
                    <div className="order-item">
                      <strong>Order Date:</strong>{" "}
                      {order.OrderDate.split("T")[0]}
                    </div>
                    <div className="order-item">
                      <strong>City:</strong> {order.City}
                    </div>
                    <button
                      onClick={() => {
                        handleAddToPending(order.OrderID); // Directly call the function here
                      }}
                    >
                      Add to Pending Orders
                    </button>
                  </div>
                ))
              ) : (
                <p>No rescheduled orders available.</p>
              )}
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
                  <th>Capacity</th>
                  <th>Train</th>
                </tr>
              </thead>
              <tbody>
                {trainDetails.map((Train, index) => (
                  <tr key={index}>
                    <td>{Train.TrainScheduleID}</td>
                    <td>{Train.Capacity}</td>
                    <td>{Train.Description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="head">
              <h2>City-Train Details</h2>
            </div>
            <div className="dates">
              <strong className="todayDate">Today : {currentDate}</strong>
              <strong className="NextDate">
                City train Allocation details for {tomorrow}
              </strong>
            </div>
            <table className="train-schedule-table">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Available Capacity</th>
                  <th>Capacity</th>
                  <th>Train</th>
                </tr>
              </thead>
              <tbody>
                {cityTrainDetails.map((train, index) => (
                  <tr key={index}>
                    <td>{train.CityName}</td>
                    <td>{train.AllocatedCapacity}</td>
                    <td>{train.Capacity}</td>
                    <td>{train.Description}</td>
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
          <button onClick={() => setActiveTab("RescheduleOrders")}>
            Reschedule Orders
          </button>
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
