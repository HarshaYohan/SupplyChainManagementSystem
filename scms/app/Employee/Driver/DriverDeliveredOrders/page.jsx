'use client';
import React from 'react';
import "../../../../styles/employee/DriverDeliverdOrders.css"; // Import regular CSS

const DeliveredItems = () => {
    const deliveredItems = [
      { id: 1, name: 'Order 1', date: '2024-10-01' },
      { id: 2, name: 'Order 2', date: '2024-10-02' },
      { id: 3, name: 'Order 3', date: '2024-10-03' },
    ];
  
    const handleShowDetails = (id) => {
      alert(`Showing details for Item ${id}`);
    };
  
    return (
      <div className="orders">
        <h1 className="title2">Delivered Items</h1>
        <ul className="orderList">
          {deliveredItems.map((item) => (
            <li key={item.id} className="orderItem">
              <div className="orderCard">
                <div className="orderText">
                  {item.name} - Delivered on {item.date}
                </div>
                <div className="buttonContainer">
                  <button
                    className="toggleButton"
                    onClick={() => handleShowDetails(item.id)}
                  >
                    Show Details
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DeliveredItems;
  