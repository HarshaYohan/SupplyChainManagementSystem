"use client";
import React from "react";
import Drivernavbar from "../../components/Drivernavbar";
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
  );
}
