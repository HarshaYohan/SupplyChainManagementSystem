"use client";
import React, { useEffect, useState } from "react";
import { useMemo } from 'react';
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faTruck, faUserTie, faSignOutAlt, faTruckLoading, faCalendarAlt,  faFilter} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../../../styles/employee/storeManager.css";

const StoreManager = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);
  const [storeDetails, setStoreDetails] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [assistants, setAssistants] = useState([]);
  const [productOrders, setProductOrders] = useState([]);
  const [activeSection, setActiveSection] = useState("home");
  const [name, setName] = useState("");
  const [isFiltered, setFilter] = useState(false);
  const [truckschedule, setTruckSchedule] = useState([]);
  const [isDateFiltered, setIsDateFiltered] = useState(false);

  const tomorrow = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  }, []);
  
  // Updated isTomorrow function
  const isTomorrow = (dateString) => {
    const date = new Date(dateString).toISOString().split("T")[0];
    return date === tomorrow;
  };


  useEffect(() => {
    const fetchUserDetails = async () => {
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      if (storedUserData && storedUserData.role === "Store Manager") {
        setUserDetails(storedUserData);
        console.log("User details: ", storedUserData);
      } else {
        router.push("/EmployeeLogin"); 
      }
    };

    fetchUserDetails();
  }, [router]);



  useEffect(() => {
    const fetchUserData = async () => {
      if (userDetails && userDetails.email) {
        try {
          const storeRes = await axios.post("/api/Employee/getStoreManager", { email: userDetails.email });
          setName(storeRes.data.name);
        } catch (error) {
          console.error("Failed to fetch store data", error);
        }
      }
    };

    if (userDetails) {
      fetchUserData();
    }
  }, [userDetails]);


  useEffect(() => {
    const fetchStoreDetails = async () => {
      if (userDetails && userDetails.email) {
        try {
          const response = await axios.post("/api/Employee/getStoreDetails", { email: userDetails.email });
          setStoreDetails(response.data); 
        } catch (error) {
          console.error("Failed to fetch store data", error);
        }
      }
    };
  
    if (userDetails) {
      fetchStoreDetails();
    }
  }, [userDetails]);



  useEffect(() => {
    const fetchDriverDetails = async () => {
      if (userDetails && userDetails.email) {
        try {
          const response = await axios.post("/api/Employee/getDriverDetails", { email: userDetails.email });
          setDrivers(response.data.drivers); // Set the fetched drivers
        } catch (error) {
          console.error("Failed to fetch driver details", error);
        }
      }
    };
  
    if (userDetails) {
      fetchDriverDetails();
    }
  }, [userDetails]);


  useEffect(() => {
    const fetchAssistantDetails = async () => {
      if (userDetails && userDetails.email) {
        try {
          const response = await axios.post("/api/Employee/getAssistantDetails", { email: userDetails.email });
          setAssistants(response.data.driverassistants); // Set the fetched assistants
        } catch (error) {
          console.error("Failed to fetch driver details", error);
        }
      }
    };
  
    if (userDetails) {
      fetchAssistantDetails();
    }
  }, [userDetails]);


  const fetchProductOrders = async (city) => {
    try {
      const response = await axios.post("/api/Employee/getProductDetails", { city: city });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch product orders:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchProductOrdersData = async () => {
      if (storeDetails?.city && activeSection === "products") {
        try {
          const products = await fetchProductOrders(storeDetails.city);
          setProductOrders(products);
        } catch (error) {
          console.error("Failed to fetch products data:", error);
        }
      }
    };
  
    fetchProductOrdersData();
  }, [storeDetails, activeSection]);
  
  
  
  const handleStatusChange = async (orderId) => {
    try {
      await axios.post("/api/Employee/updateProductStatus", { orderId });
      

      setProductOrders((prevOrders) =>
        prevOrders.map((product) =>
          product.OrderID === orderId
            ? { ...product, CurrentStatus: "At Distribution Center" }
            : product
        )
      );
    } catch (error) {
      console.error("Failed to update order status:", error);
    }
  };

  
  const handleUpdateSchedule = async () => {
    try {
      const response = await axios.post("/api/Employee/updateSchedule", {city: storeDetails.city});
      setTruckSchedule(response.data);
    } catch (error) {
      console.error("Failed to update schedule:", error);
    }
  };
  
  
  const handleLogout = () => {
  
    localStorage.removeItem("userData");
    
    router.push("/Employee/EmployeeLogin");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="greeting">
            <h2>Welcome, {name}!</h2>
            <p>Select a section from the sidebar to manage your store.</p>
          </div>
        );

      case "myStore":
        return (
          storeDetails && (
            <div className="store-details">
              <h2>My Store</h2>
              <p>
                <strong className="id">ID:</strong> {storeDetails.storeID}
              </p>
              <p>
                <strong className="address">Address:</strong> {storeDetails.address}
              </p>
              <p>
                <strong className="city">City:</strong> {storeDetails.city}
              </p>
              <p>
                <strong className="contact">Railway Contact:</strong> {storeDetails.railwayContact}
              </p>
            </div>
          )
        );

      case "drivers":
        return (
          <div className="drivers-list">
            <h2>Drivers</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Weekly Hours</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver) => (
                  <tr key={driver.id}>
                    <td>{driver.id}</td>
                    <td>{driver.name}</td>
                    <td>{driver.contact}</td>
                    <td>{driver.email}</td>
                    <td>{driver.weeklyHours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "assistants":
        return (
          <div className="assistants-list">
            <h2>Assistants</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Weekly Hours</th>
                </tr>
              </thead>
              <tbody>
                {assistants.map((assistant) => (
                  <tr key={assistant.id}>
                    <td>{assistant.id}</td>
                    <td>{assistant.name}</td>
                    <td>{assistant.contact}</td>
                    <td>{assistant.email}</td>
                    <td>{assistant.weeklyHours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "products":
          return (
            <div className="products-section">
              <div className="products-header">
                <button onClick={() => setFilter((prev) => !prev)} className="filter-button">
                <FontAwesomeIcon icon={faFilter} />{isFiltered ?  "Show All": "Not Arrived"  }
                </button>
                <h2>Orders Arrival</h2>
              </div>
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Current Status</th>
                    <th>Arrived</th>
                  </tr>
                </thead>
                <tbody>
                  {productOrders
                    .filter((product) =>
                      isFiltered ? product.CurrentStatus !== "At Distribution Center" : true
                    )
                    .map((product) => (
                      <tr key={product.OrderID}>
                        <td>{product.OrderID}</td>
                        <td>{product.CurrentStatus}</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={product.CurrentStatus === "At Distribution Center"}
                            onChange={() => handleStatusChange(product.OrderID)}
                            disabled={product.CurrentStatus === "At Distribution Center"}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          );

          case "truckschedule":
            return (
              <div className="truckschedule-section">
                <div className="truckschedule-header">
                  <button onClick={() => setIsDateFiltered((prev) => !prev)} className="filter-button">
                    <FontAwesomeIcon icon={faFilter} /> {isDateFiltered ? "Show All" : "Show Tomorrow"}
                  </button>
                  <h2>Truck Schedule</h2>
                </div>
                <button onClick={() => handleUpdateSchedule()} className="update-schedule-button">
                  Update Schedule
                </button>
                <table>
                  <thead>
                    <tr>
                      <th>Schedule ID</th>
                      <th>Truck ID</th>
                      <th>Route ID</th>
                      <th>Driver ID</th>
                      <th>Assistant ID</th>
                      <th>Scheduled Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {truckschedule
                      .filter((schedule) => (isDateFiltered ? isTomorrow(schedule.ScheduleDate) : true))
                      .map((schedule) => (
                        <tr key={schedule.ScheduleID}>
                          <td>{schedule.ScheduleID}</td>
                          <td>{schedule.TruckID}</td>
                          <td>{schedule.RouteID}</td>
                          <td>{schedule.DriverID}</td>
                          <td>{schedule.AssistantID}</td>
                          <td>{schedule.ScheduleDate.split("T")[0]}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            );

      default:
        return <p>Select a section from the sidebar to manage your store.</p>;
    }
  };

  return (
    <div className="store-manager-wrapper">
      <div className="sidebar">
        <h3 onClick={() => setActiveSection("home")}>Store Manager</h3>
        <ul>
          <li>
            <button onClick={() => setActiveSection("myStore")}>
              <FontAwesomeIcon icon={faStore} /> My Store
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("drivers")}>
              <FontAwesomeIcon icon={faTruck} /> Drivers
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("assistants")}>
              <FontAwesomeIcon icon={faUserTie} /> Assistants
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("products")}>
              <FontAwesomeIcon icon={faTruckLoading} /> Orders Arrival
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("truckschedule")}>
              <FontAwesomeIcon icon={faCalendarAlt} /> Truck Schedule  
            </button>
          </li>
        </ul>
        <div className="logout-section">
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /></button>
        </div>
      </div>
      <div className="store-manager-container">{renderContent()}</div>
    </div>
  );
};

export default StoreManager;