"use client";
import React, { useEffect, useState } from "react";
import Drivernavbar from "../../components/Drivernavbar";
import "../../../../styles/employee/DriverHomePage.css";

import Card2 from "../../components/DriverCard";
import axios from "axios";

export default function DriverHomePage() {
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      console.log(parsedData.email);
      console.log(parsedData.id);
      console.log(parsedData.role);
    }
  }, []);

  const handleStartClick = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (!userData) throw new Error("User data not found in localStorage.");

      const { email } = userData;
      // Send request to start time tracking
      const response = await axios.post(
        "/api/Employee/Driver/driverstartbutton",
        {
          email,
        }
      );

      if (response.status === 200) {
        alert("Start time recorded");
      } else {
        console.error("Start time error:", response.data.message);
      }
    } catch (error) {
      console.error("Error recording start time:", error);
    }
  };

  const handleEndClick = async () => {
    try {
      const value = localStorage.getItem("userData");

      if (!value) throw new Error("User data not found in localStorage.");
      console.log(value);
      const { email } = JSON.parse(value);
      const response = await axios.post(
        "/api/Employee/Driver/DriverNewEndbutton",
        {
          email,
        }
      );
      const { currentDate, TimeDifference } = response.data;
      if (response.status === 200) {
        alert("End time recorded");
        const driverWorkingHours =
          JSON.parse(localStorage.getItem("driverWorkingHours")) || [];
        if (currentDate == 0) {
          driverWorkingHours.push(TimeDifference);
        } else {
          driverWorkingHours[driverWorkingHours.length - 1] = TimeDifference;
        }
        localStorage.setItem(
          "driverWorkingHours",
          JSON.stringify(driverWorkingHours)
        );
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error recording end time:", error);
    }
  };

  return (
    <div>
      <Drivernavbar />
      
      <div className="OR">
        <div className="greeting-box">
          <h1>Welcome to RAILTRUX!</h1>
          <p>Your journey in supply chain management starts here.</p>
          <button className="action-button start-button" onClick={handleStartClick}>Start</button>
        <button className="action-button end-button" onClick={handleEndClick}>End</button>
        </div>
        
        <div className="container1">
          <Card2
            title="New Orders"
            background="linear-gradient(135deg, #b3d4ff, #91c7ff)"
            link="/Employee/Driver/DriverNewOrders"
            iconType="new"
          />
          <Card2
            title="Delivered Orders"
            background="linear-gradient(135deg, #ffe7d9, #ffb3a7)"
            link="/Employee/Driver/DriverDeliveredOrders"
            iconType="finished"
          />
          <Card2
            title="My Efforts"
            background="linear-gradient(135deg, #b3d4ff, #91c7ff)"
            link="/Employee/Driver/MyEffort"
            iconType="mywork"
          />
        </div>

       

      </div>
    </div>
  );
}