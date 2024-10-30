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
        `SELECT DISTINCT route.RouteID, route.StoreID, route.RouteDescription, route.MaxTimeHrs
         FROM route
         JOIN store ON route.StoreID = store.StoreID
         WHERE store.CityName = ?
         AND route.RouteID IN (
           SELECT DISTINCT orders.RouteID
           FROM orders
           WHERE orders.CurrentStatus = 'At Distribution Center' AND orders.City = ?)
         `, [city, city]
      );

      let assignedSchedules = [];
      let driverScheduleMap = {};
      let assistantScheduleMap = {};

      for (const order of orders) {
        let assignedTruck, assignedRoute, assignedDriver, assignedAssistant, scheduleId;

        for (const truck of trucks) {
          assignedTruck = truck.TruckID;
          assignedRoute = routes.find(route => route.RouteID)?.RouteID;
          if (assignedTruck && assignedRoute) break;
        }

        for (const driver of drivers) {
          if (!driverScheduleMap[driver.DriverID] || driverScheduleMap[driver.DriverID] !== order.OrderID - 1) {
            assignedDriver = driver.DriverID;
            driverScheduleMap[driver.DriverID] = order.OrderID;
            break;
          }
        }

        for (const assistant of assistants) {
          if (!assistantScheduleMap[assistant.AssistantID] || assistantScheduleMap[assistant.AssistantID] < 2) {
            assignedAssistant = assistant.AssistantID;
            assistantScheduleMap[assistant.AssistantID] = (assistantScheduleMap[assistant.AssistantID] || 0) + 1;
            break;
          } else {
            assistantScheduleMap[assistant.AssistantID] = 0;
          }
        }

        if (assignedTruck && assignedRoute && assignedDriver && assignedAssistant) {
          // Check if a schedule already exists with the same TruckID, RouteID, DriverID, and AssistantID
          const existingSchedule = await dbQuery(
            `SELECT ScheduleID FROM truckschedule 
             WHERE TruckID = ? AND RouteID = ? AND DriverID = ? AND AssistantID = ?`,
            [assignedTruck, assignedRoute, assignedDriver, assignedAssistant]
          );

          if (existingSchedule.length > 0) {
            // Use existing ScheduleID
            scheduleId = existingSchedule[0].ScheduleID;
          } else {
            // Insert a new record and get the new ScheduleID
            const result = await dbQuery(
              `INSERT INTO truckschedule (TruckID, RouteID, DriverID, AssistantID) VALUES (?, ?, ?, ?)`,
              [assignedTruck, assignedRoute, assignedDriver, assignedAssistant]
            );
            scheduleId = result.insertId;
          }

          // Insert the ScheduleID and OrderID into order_schedule (OrderScheduleID will auto-increment)
          await dbQuery(
            `INSERT INTO order_schedule (ScheduleID, OrderID) VALUES (?, ?)`,
            [scheduleId, order.OrderID]
          );

          // Track this schedule
          assignedSchedules.push({
            ScheduleID: scheduleId,
            TruckID: assignedTruck,
            RouteID: assignedRoute,
            DriverID: assignedDriver,
            AssistantID: assignedAssistant,
          });
        }
      }

      await dbQuery(
        `UPDATE orders SET CurrentStatus = 'Out for Final Delivery' WHERE CurrentStatus = 'At Distribution Center' AND City = ?`,
        [city]
      );

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
