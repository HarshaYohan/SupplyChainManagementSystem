'use client';
import React, { useState } from 'react';
import "../../../../styles/employee/MyEffort.css"; // Import CSS for styling

// Edited myeffort
const MyEffort = () => {
    // Hardcoded working hours for now
    const driverWorkingHours = [
        { week: 'Week 1', hours: 35 },
        { week: 'Week 2', hours: 40 },
        { week: 'Week 3', hours: 38 },
        { week: 'Week 4', hours: 28 },
    ];

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
                        <div className="effort-cell">{entry.week}</div>
                        <div className="effort-cell">{entry.hours}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEffort;
