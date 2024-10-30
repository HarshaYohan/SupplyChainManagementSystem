"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function OrdersPage() {
  const [orders, setOrders] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const store = localStorage.getItem('store');
        const { data } = await axios.get('/api/orders', {
          headers: { store },
        });
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const assignOrders = async (routeId) => {
    try {
      const { data } = await axios.post('/api/assign', { routeId });
      alert(data.message);
    } catch (error) {
      console.error('Error assigning orders:', error);
      alert('Failed to assign orders.');
    }
  };

  if (loading) return <p>Loading orders...</p>;

  return (
    <div>
      <h1>Orders at Distribution Center</h1>
      {Object.keys(orders).length === 0 ? (
        <p>No orders available.</p>
      ) : (
        Object.entries(orders).map(([routeId, routeOrders]) => (
          <div key={routeId} style={{ marginBottom: '20px' }}>
            <h2>Route ID: {routeId}</h2>
            <ul>
              {routeOrders.map((order) => (
                <li key={order.OrderID}>
                  Order #{order.OrderID} - {order.DeliveryAddress}
                </li>
              ))}
            </ul>
            <button onClick={() => assignOrders(routeId)}>
              Assign Orders to Truck Schedule
            </button>
          </div>
        ))
      )}
    </div>
  );
}
