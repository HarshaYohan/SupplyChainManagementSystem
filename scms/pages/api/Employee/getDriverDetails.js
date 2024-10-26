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
    const { email } = req.body;

    const getDriversQuery = `
      SELECT 
          driver.DriverID, 
          employee.Name, 
          employee.PhoneNumber, 
          employee.Email, 
          driver.WeeklyWorkHours
      FROM 
          driver
      JOIN 
          employee ON driver.EmployeeID = employee.EmployeeID
      JOIN 
          storeManager ON storeManager.StoreID = driver.StoreID
      JOIN 
          employee AS manager ON storeManager.ManagerID = manager.EmployeeID
      WHERE 
          manager.Email = ?
    `;

    db.query(getDriversQuery, [email], (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch driver details" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "No drivers found for this store" });
      }

      // Mapping the result to return drivers
      const drivers = results.map((driver) => ({
        id: driver.DriverID,
        name: driver.Name,
        contact: driver.PhoneNumber,
        email: driver.Email,
        weeklyHours: driver.WeeklyWorkHours,
      }));

      // Respond with the list of drivers
      res.json({ drivers });
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
