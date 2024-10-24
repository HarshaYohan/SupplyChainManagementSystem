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

    const getStoreDetailsQuery = `
      SELECT store.StoreID, store.Address, store.CityName, RailwayStationContact  
      FROM store
      JOIN storeManager ON storeManager.StoreID = store.StoreID
      JOIN employee ON employee.EmployeeID = storeManager.ManagerID
      WHERE employee.Email = ?
    `;

    db.query(getStoreDetailsQuery, [email], (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch store details" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "No store found for this employee" });
      }
      res.json({
        storeID: results[0].StoreID,
        address: results[0].Address,
        city: results[0].CityName,
        railwayContact: results[0].RailwayStationContact
      });
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
