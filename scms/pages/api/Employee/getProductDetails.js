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
    const { city } = req.body;
    const query = `
    SELECT OrderID, CurrentStatus 
      FROM orders
      WHERE City = ?
    `;

    db.query(query, [city], (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch product details" });
      }
      res.json(results);
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}