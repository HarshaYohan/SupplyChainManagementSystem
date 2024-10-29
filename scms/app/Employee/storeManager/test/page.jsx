"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../../../styles/employee/orders.css'; // Import CSS styles

const OrdersPage = ({ "Colombo" }) => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  // Fetch orders at the distribution center when the page loads
  useEffect(() => {
    axios.get(`/api/Employee/orders/${city}`)
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, [city]);

  // Fetch truck schedules when an order is selected
  const fetchSchedules = (routeId) => {
    axios.get(`/api/Employee/truckschedules/${routeId}`)
      .then(response => setSchedules(response.data))
      .catch(error => console.error('Error fetching schedules:', error));
  };

  // Handle order selection
  const handleOrderSelect = (order) => {
    setSelectedOrder(order);
    fetchSchedules(order.RouteID);
  };

  // Assign the order to a truck schedule
  const assignOrderToSchedule = () => {
    if (!selectedOrder || !selectedSchedule) return;

    axios.post('/api/Employee/orders/assign', {
      orderId: selectedOrder.OrderID,
      scheduleId: selectedSchedule.ScheduleID,
    })
      .then(() => {
        alert('Order assigned to truck schedule!');
        setOrders(orders.filter(o => o.OrderID !== selectedOrder.OrderID));
        setSelectedOrder(null);
        setSchedules([]);
      })
      .catch(error => console.error('Error assigning order:', error));
  };

  return (
    <div className={styles.container}>
      <h1>Orders at {city} Distribution Center</h1>
      <ul>
        {orders.map(order => (
          <li key={order.OrderID} onClick={() => handleOrderSelect(order)}>
            {order.DeliveryAddress} - Route {order.RouteID}
          </li>
        ))}
      </ul>

      {selectedOrder && (
        <div className={styles.selectedOrder}>
          <h2>Available Truck Schedules for Route {selectedOrder.RouteID}</h2>
          <ul className={styles.scheduleList}>
            {schedules.map(schedule => (
              <li key={schedule.ScheduleID} onClick={() => setSelectedSchedule(schedule)}>
                Truck {schedule.TruckID} - {schedule.ScheduleDate} {schedule.StartTime}
              </li>
            ))}
          </ul>
          <button onClick={assignOrderToSchedule}>Assign to Truck Schedule</button>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
