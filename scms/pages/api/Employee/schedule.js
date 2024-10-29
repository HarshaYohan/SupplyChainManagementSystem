import db from "../../../backend/db.js"; // Ensure correct path
import runCors from "../../../utils/cors.js";

export default function handler(req, res) {
  runCors(req, res)
    .then(() => {
      if (req.method === "POST") {
        const { driverID, assistantID, truckID, routeID, scheduleDate} = req.body;
        console.log("driverID", driverID);
        console.log("assistantID", assistantID);  
        console.log("truckId", truckID);
        console.log("routeID", routeID);
        console.log("scheduleDate", scheduleDate);

        if (!driverID || !scheduleDate || !assistantID || !truckID || !routeID ) {
          return res.status(400).json({ error: "Missing required fields" });
        }

        const insertScheduleQuery = `
          INSERT INTO truckschedule (DriverID, ScheduleDate, AssistantID, TruckID, RouteID)
          VALUES (?, ?, ?, ?, ?)
        `;

        db.query(insertScheduleQuery, [driverID, scheduleDate, assistantID, truckID, routeID], (error, results) => {
          if (error) {
            console.error("Error creating schedule:", error);
            return res.status(500).json({ error: "Internal server error" });
          }
          
          res.status(201).json({ message: "Schedule created successfully" });
        });
      } else {
        res.status(405).json({ error: "Method not allowed" });
      }
    })
    .catch((error) => {
      console.error("CORS error:", error);
      res.status(500).json({ error: "CORS failed" });
    });
}
