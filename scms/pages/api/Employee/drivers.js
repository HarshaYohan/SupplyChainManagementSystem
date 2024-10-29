
import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res); // Apply CORS
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const { date } = req.body; // Expect 'date' from the frontend
  
    const getDriversQuery = `
      SELECT d.DriverID, e.Name
      FROM driver d 
      JOIN employee e ON d.EmployeeID = e.EmployeeID
      WHERE NOT EXISTS (
        SELECT 1 
        FROM truckschedule ts 
        WHERE ts.DriverID = d.DriverID 
          AND ts.ScheduleDate = ?
      ) AND d.WeeklyWorkHours < 40
    `;
  
    db.query(getDriversQuery, [date], (err, results) => { // Use 'date' here
      if (err) {
        return res.status(500).json({ error: "Failed to fetch driver details" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "No drivers available" });
      }
  
      const drivers = results.map((driver) => ({
        DriverID: driver.DriverID, // Use DriverID as expected in frontend
        Name: driver.Name,
      }));
  
      res.json({ drivers }); // Send the drivers array in response
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};  
