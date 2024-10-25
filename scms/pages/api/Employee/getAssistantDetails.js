import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res); 
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const { email } = req.body;

    const getDriversQuery = `
      SELECT 
          driverassistant.AssistantID, 
          employee.Name, 
          employee.PhoneNumber, 
          employee.Email, 
          driverassistant.WeeklyWorkHours
      FROM 
          driverassistant
      JOIN 
          employee ON driverassistant.EmployeeID = employee.EmployeeID
      JOIN 
          storeManager ON storeManager.StoreID = driverassistant.StoreID
      JOIN 
          employee AS manager ON storeManager.ManagerID = manager.EmployeeID
      WHERE 
          manager.Email = ?
    `;

    db.query(getDriversQuery, [email], (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch Assistant details" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "No assistants found for this store" });
      }

      // Mapping the result to return drivers
      const driverassistants = results.map((driverassistant) => ({
        id: driverassistant.AssistantID,
        name: driverassistant.Name,
        contact: driverassistant.PhoneNumber,
        email: driverassistant.Email,
        weeklyHours: driverassistant.WeeklyWorkHours,
      }));

      // Respond with the list of drivers
      res.json({ driverassistants });
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
