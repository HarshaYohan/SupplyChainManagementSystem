import React from 'react'
import Drivernavbar from '../components/Drivernavbar';
import "../../styles/DriverHomePage.css";
import Card2 from '../components/DriverCard';


export default function DriverHomePage() {
  return (
    <div>
       <Drivernavbar/>
       <div className="greeting-box">
      <h1>Welcome to RAILTRUX!</h1>
      <p>Your journey in supply chain management starts here.</p>
    </div>
    <div className="container1">
    <Card2
          title="New Orders"
          background="#FFD700"
          link="/DriverNewOrders"
          iconType="new" // Icon for "New Work"
        />

        <Card2
          title="Delivered Orders"
          background="#FF4500"
          link="/DriverDeliveredOrders"
          iconType="finished" // Icon for "Finished Work"
        />

        <Card2
          title="My Efforts"
          background="#1E90FF"
          link="/MyEffort"
          iconType="mywork" // Icon for "My Work"
        />
    </div>

    
    </div>
  )
}
