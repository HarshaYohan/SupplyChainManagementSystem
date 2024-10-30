import { CleaningServices } from "@mui/icons-material";
import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";
import { log } from "console";

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
         WHERE store.CityName = ? AND route.RouteID IN (
           SELECT DISTINCT orders.RouteID
           FROM orders
           WHERE orders.CurrentStatus = 'At Distribution Center' AND orders.City = ?)
         `, [city, city]
      );

      // Group orders by RouteID
      const ordersByRoute = {};
      for (const order of orders) {
        if (!ordersByRoute[order.RouteID]) {
          ordersByRoute[order.RouteID] = [];
        }
        ordersByRoute[order.RouteID].push(order);
      }

      let assignedSchedules = [];
      let driverIndex = 0;
      let assistantIndex = 0;


      const today = new Date();
      today.setDate(today.getDate() + 1); // Schedule for tomorrow
      const formattedDate = today.toISOString().split("T")[0];
  
       
      // Iterate through each route and assign resources
      for (const route of routes) {
        const ordersForRoute = ordersByRoute[route.RouteID];
        if (!ordersForRoute) continue; 

        const assignedTruck = trucks.shift(); // Rotate trucks
        const assignedDriver = drivers[driverIndex]; // Rotate drivers
        const assignedAssistant = assistants[assistantIndex]; // Rotate assistants

        // Increment driver and assistant index for rotation
        driverIndex = (driverIndex + 1) % drivers.length;
        assistantIndex = (assistantIndex + 1) % assistants.length;

        if (assignedTruck && assignedDriver && assignedAssistant) {
          // Check if schedule already exists for the same route, truck, driver, and assistant
          let scheduleId;
          const existingSchedule = await dbQuery(
            `SELECT ScheduleID FROM truckschedule 
             WHERE TruckID = ? AND RouteID = ? AND DriverID = ? AND AssistantID = ?`,
            [assignedTruck.TruckID, route.RouteID, assignedDriver.DriverID, assignedAssistant.AssistantID]
          );

          if (existingSchedule.length > 0) {
            scheduleId = existingSchedule[0].ScheduleID;
          } else {
            const result = await dbQuery(
              `INSERT INTO truckschedule (TruckID, RouteID, DriverID, AssistantID, ScheduleDate) VALUES (?, ?, ?, ?, ?)`,
              [assignedTruck.TruckID, route.RouteID, assignedDriver.DriverID, assignedAssistant.AssistantID, formattedDate]
            );
            scheduleId = result.insertId;
          }

          // Assign schedule to each order in this route group
          for (const order of ordersForRoute) {
            await dbQuery(
              `INSERT INTO order_schedule (ScheduleID, OrderID) VALUES (?, ?)`,
              [scheduleId, order.OrderID]
            );
          }

          assignedSchedules.push({
            ScheduleID: scheduleId,
            TruckID: assignedTruck.TruckID,
            RouteID: route.RouteID,
            DriverID: assignedDriver.DriverID,
            AssistantID: assignedAssistant.AssistantID,
          });
        }
      }

      // Update orders' status
      await dbQuery(
        `UPDATE orders SET CurrentStatus = 'Out for Final Delivery' WHERE CurrentStatus = 'At Distribution Center' AND City = ?`,
        [city]
      );

      // Fetch the updated schedule
      const updatedSchedule = await dbQuery(
        `SELECT truckschedule.ScheduleID, truckschedule.TruckID, truckschedule.RouteID, truckschedule.DriverID, truckschedule.AssistantID, truckschedule.ScheduleDate
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
