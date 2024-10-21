'use client';
import React, { useState } from 'react';
import "../../../../styles/employee/DriverNewOrders.css";

const NewWork = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      title: 'Order 1',
      details: 'Details of order 1',
      status: 'Pending',
      deliveryDate: '2024-10-10',
      customerName: 'John Doe',
      address: '123 Main St, City, Country',
      phoneNumber: '123-456-7890'
    },
    {
      id: 2,
      title: 'Order 2',
      details: 'Details of order 2',
      status: 'Pending',
      deliveryDate: '2024-10-12',
      customerName: 'Jane Smith',
      address: '456 Elm St, City, Country',
      phoneNumber: '987-654-3210'
    },
    {
      id: 3,
      title: 'Order 3',
      details: 'Details of order 3',
      status: 'Pending',
      deliveryDate: '2024-10-15',
      customerName: 'Alice Johnson',
      address: '789 Oak St, City, Country',
      phoneNumber: '555-123-4567'
    },
  ]);

  const [visibleDetails, setVisibleDetails] = useState(null);

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  const startDelivery = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: 'Ended' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="orders">
      <h1 className="title1">Orders</h1>
      <ul className="orderList">
        {orders.map((order) => (
          <li key={order.id} className="orderItem">
            <div className="orderCard">
              <h2 className="orderTitle">{order.title}</h2>
              <p className="orderStatus">Status: {order.status}</p>
              <div className="buttonContainer">
                <button
                  onClick={() => toggleDetails(order.id)}
                  className="toggleButton"
                >
                  {visibleDetails === order.id ? 'Hide Details' : 'Show Details'}
                </button>
                <button
                  onClick={() => startDelivery(order.id)}
                  disabled={order.status !== 'Pending'}
                  className={order.status === 'Pending' ? 'startButton' : 'disabledButton'}
                >
                  Confirm
                </button>
              </div>
              {visibleDetails === order.id && (
                <div className="detailsContainer">
                  <p className="detailsText">Order ID: {order.id}</p>
                  <p className="detailsText">Details: {order.details}</p>
                  <p className="detailsText">Customer: {order.customerName}</p>
                  <p className="detailsText">Address: {order.address}</p>
                  <p className="detailsText">Phone Number: {order.phoneNumber}</p>
                  <p className="detailsText">Delivery Date: {order.deliveryDate}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewWork;
