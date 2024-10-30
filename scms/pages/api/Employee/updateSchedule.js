// Filename: /api/Employee/updateSchedule.js
import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

// Helper function to wrap db.query in a Promise
function dbQuery(query, values = []) {
  return new Promise((resolve, reject) => {
    db.query(query, values, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const { city } = req.body;

    try {
      // Clear existing data in truckschedule and order_schedule tables
      await dbQuery(`DELETE FROM order_schedule`);
      await dbQuery(`ALTER TABLE order_schedule AUTO_INCREMENT = 1`);
      await dbQuery(`DELETE FROM truckschedule`);
      await dbQuery(`ALTER TABLE truckschedule AUTO_INCREMENT = 1`);

      // Fetch orders, drivers, assistants, trucks, and routes
      const orders = await dbQuery(
        `SELECT * FROM orders WHERE CurrentStatus = 'At Distribution Center' AND City = ?`, 
        [city]
      );
      const drivers = await dbQuery(
        `SELECT driver.DriverID, driver.WeeklyWorkHours, driver.StoreID, driver.EmployeeID
         FROM driver 
         JOIN store ON store.StoreID = driver.StoreID
         WHERE store.CityName = ? AND driver.WeeklyWorkHours < 40`, 
        [city]
      );
      const assistants = await dbQuery(
        `SELECT driverassistant.AssistantID, driverassistant.WeeklyWorkHours, driverassistant.StoreID, driverassistant.EmployeeID
         FROM driverassistant 
         JOIN store ON store.StoreID = driverassistant.StoreID
         WHERE store.CityName = ? AND driverassistant.WeeklyWorkHours < 60`, 
        [city]
      );
      const trucks = await dbQuery(
        `SELECT truck.TruckID, truck.StoreID, truck.TruckNumber, truck.Capacity, truck.Condition_
         FROM truck 
         JOIN store ON store.StoreID = truck.StoreID
         WHERE store.CityName = ? AND truck.Condition_ = 'Good'`, 
        [city]
      );
      const routes = await dbQuery(
        `SELECT route.RouteID, route.StoreID, route.RouteDescription, route.MaxTimeHrs
         FROM route
         JOIN store ON route.StoreID = store.StoreID
         WHERE store.CityName = ?`, 
        [city]
      );

      // Initialize scheduling variables
      let assignedSchedules = [];
      let driverScheduleMap = {}; // Track last schedule for each driver to avoid consecutive scheduling
      let assistantScheduleMap = {}; // Track consecutive assignments for assistants

      // Loop through each order and assign ScheduleID, TruckID, RouteID, DriverID, and AssistantID
      for (const order of orders) {
        let assignedTruck, assignedRoute, assignedDriver, assignedAssistant;

        // Assign an available truck and route
        for (const truck of trucks) {
          assignedTruck = truck.TruckID;
          assignedRoute = routes.find(route => route.RouteID)?.RouteID;
          if (assignedTruck && assignedRoute) break;
        }

        // Assign an available driver based on roster constraints
        for (const driver of drivers) {
          // Check if the driver was not assigned to the last schedule (no consecutive scheduling)
          if (!driverScheduleMap[driver.DriverID] || driverScheduleMap[driver.DriverID] !== order.OrderID - 1) {
            assignedDriver = driver.DriverID;
            driverScheduleMap[driver.DriverID] = order.OrderID; // Track last assigned schedule for this driver
            break;
          }
        }

        // Assign an available assistant based on roster constraints
        for (const assistant of assistants) {
          // Check if the assistant has fewer than 2 consecutive assignments
          if (!assistantScheduleMap[assistant.AssistantID] || assistantScheduleMap[assistant.AssistantID] < 2) {
            assignedAssistant = assistant.AssistantID;
            assistantScheduleMap[assistant.AssistantID] = (assistantScheduleMap[assistant.AssistantID] || 0) + 1;
            break;
          } else {
            assistantScheduleMap[assistant.AssistantID] = 0; // Reset if consecutive limit is reached
          }
        }

        // Insert assignment into truckschedule and order_schedule if all entities are available
        if (assignedTruck && assignedRoute && assignedDriver && assignedAssistant) {
          const result = await dbQuery(
            `INSERT INTO truckschedule (TruckID, RouteID, DriverID, AssistantID) VALUES (?, ?, ?, ?)`,
            [assignedTruck, assignedRoute, assignedDriver, assignedAssistant]
          );

          // Get the auto-incremented ScheduleID
          const newScheduleId = result.insertId;

          // Insert the ScheduleID and OrderID into order_schedule (OrderScheduleID will auto-increment)
          await dbQuery(
            `INSERT INTO order_schedule (ScheduleID, OrderID) VALUES (?, ?)`,
            [newScheduleId, order.OrderID]
          );

          // Track this schedule
          assignedSchedules.push({
            ScheduleID: newScheduleId,
            TruckID: assignedTruck,
            RouteID: assignedRoute,
            DriverID: assignedDriver,
            AssistantID: assignedAssistant,
          });
        }
      }

      // Fetch and return the updated truckschedule filtered by city
      const updatedSchedule = await dbQuery(
        `SELECT truckschedule.ScheduleID, truckschedule.TruckID, truckschedule.RouteID, truckschedule.DriverID, truckschedule.AssistantID
         FROM truckschedule 
         JOIN route ON route.RouteID = truckschedule.RouteID
         JOIN store ON store.StoreID = route.StoreID
         WHERE store.CityName = ?`, 
        [city]
      );

      res.status(200).json(updatedSchedule);

    } catch (error) {
      console.error("Failed to update schedule:", error);
      res.status(500).json({ message: "Error updating schedule" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
