'use client'

import axios from "axios";
import React, { use, useEffect, useState } from "react";
import "../../../../styles/employee/MyEffort.css"; // Import CSS for styling

const MyEffort = () => {
  const [driverWorkingHours, setDriverWorkingHours] = useState([]);
  useEffect(() => {
    const value = JSON.parse(
      localStorage.getItem("driverWorkingHours")
    ) || [];
    setDriverWorkingHours(value);
  }, []);

  return (
    <div className="effort-container">
      <h1 className="effort-title">My Efforts</h1>
      <div className="effort-table">
        <div className="effort-header">
          <div className="effort-cell">Week</div>
          <div className="effort-cell">Hours Worked</div>
        </div>
        {driverWorkingHours.map((entry, index) => (
          <div key={index} className="effort-row">
            <div className="effort-cell">Week {index + 1}</div>
            <div className="effort-cell">{entry}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEffort;
