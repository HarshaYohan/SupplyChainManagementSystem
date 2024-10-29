import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../styles/employee/schedule.css';

export default function CreateSchedule() {
  const [drivers, setDrivers] = useState([]);
  const [assistants, setAssistants] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [storeID, setStoreID] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const store = JSON.parse(localStorage.getItem("store"));
        if (store && store.id) {
          setStoreID(store.id);
        } else {
          console.error("Store data or store ID is missing in localStorage");
        }
      } catch (error) {
        console.error("Error parsing store data from localStorage: ", error);
      }
    };
    fetchUserDetails();
  }, []);

  useEffect(() => {
    if (storeID && selectedDate) {
      fetchRoutesAndTrucks(storeID, selectedDate);
      fetchDrivers(selectedDate);
      fetchAssistants(selectedDate);
    }
  }, [storeID, selectedDate]);

  const fetchDrivers = async (date) => {
    try {
      const res = await axios.post("/api/Employee/drivers", { date });
      setDrivers(res.data.drivers);
    } catch (error) {
      console.error('Error fetching drivers:', error);
      alert('Failed to load drivers');
    }
  };

  const fetchAssistants = async (date) => {
    try {
      const res = await axios.post("/api/Employee/assistants", { date });
      setAssistants(res.data.assistants);
    } catch (error) {
      console.error('Error fetching assistants:', error);
      alert('Failed to load assistants');
    }
  };

  const fetchRoutesAndTrucks = async (storeID, date) => {
    try {
      const res = await axios.post(`/api/Employee/store-routes-trucks`, { storeID, date });
      setRoutes(res.data.routes);
      setTrucks(res.data.trucks);
    } catch (error) {
      console.error('Error fetching routes and trucks:', error);
      alert('Failed to load routes or trucks');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      await axios.post('/api/Employee/schedule', data);
      alert('Schedule created successfully');
    } catch (error) {
      console.error('Error creating schedule:', error);
      alert(`Error: ${error.response?.data?.error || 'Unknown error'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input
        type="date"
        name="scheduleDate"
        onChange={(e) => setSelectedDate(e.target.value)}
        required
      />

      <label>Driver:</label>
      <select name="driverID" required>
        <option value="">Select a driver</option>
        {drivers.map((driver) => (
          <option key={driver.DriverID} value={driver.DriverID}>
            {driver.Name}
          </option>
        ))}
      </select>

      <label>Assistant:</label>
      <select name="assistantID" required>
        <option value="">Select an assistant</option>
        {assistants.map((assistant) => (
          <option key={assistant.AssistantID} value={assistant.AssistantID}>
            {assistant.EmployeeName}
          </option>
        ))}
      </select>

      <label>Route:</label>
      <select name="routeID" required>
        <option value="">Select a route</option>
        {routes.map((route) => (
          <option key={route.RouteID} value={route.RouteID}>
            {route.RouteDescription} (Max Time: {route.MaxTimeHrs} hrs)
          </option>
        ))}
      </select>

      <label>Truck:</label>
      <select name="truckID" required>
        <option value="">Select a truck</option>
        {trucks.map((truck) => (
          <option key={truck.TruckID} value={truck.TruckID}>
            {truck.TruckNumber} (Max Capacity: {truck.Capacity})
          </option>
        ))}
      </select>

      <button type="submit">Create Schedule</button>
    </form>
  );
}
