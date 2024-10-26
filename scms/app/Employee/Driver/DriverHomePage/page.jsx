"use client";
import React from "react";
import Drivernavbar from "../../components/navbarEmployee";
import "../../../../styles/employee/DriverHomePage.css";
import Card2 from "../../components/DriverCard";
import { useEffect, useState } from "react";

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
  return (
    <div>
      <Drivernavbar />
      <div className="greeting-box">
        <h1>Welcome to RAILTRUX!</h1>
        <p>Your journey in supply chain management starts here.</p>
      </div>
      <div className="container1">
        <Card2
          title="New Orders"
          background="#FFD700"
          link="/Employee/Driver/DriverNewOrders"
          iconType="new" // Icon for "New Work"
        />

        <Card2
          title="Delivered Orders"
          background="#FF4500"
          link="/Employee/Driver/DriverDeliveredOrders"
          iconType="finished" // Icon for "Finished Work"
        />

        <Card2
          title="My Efforts"
          background="#1E90FF"
          link="/Employee/Driver/MyEffort"
          iconType="mywork" // Icon for "My Work"
        />
      </div>
    </div>
  );
}
