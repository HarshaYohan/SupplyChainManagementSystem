// /pages/api/store/getStoreDetails.js
import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "GET") {
    const { email } = req.body;

    const getEmployeeStoreQuery = `
      SELECT Stores.* FROM Stores
      INNER JOIN Employees ON Stores.id = Employees.storeId
      WHERE Employees.email = ?`;

    db.query(getEmployeeStoreQuery, [email], (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch store details" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "Store not found for the provided email" });
      }
      res.send(results[0]);
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
