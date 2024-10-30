import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    res.status(500).json({ error: "CORS failed" });
    return;
  }

  const details = `
  SELECT Orders.OrderID,
  Orders.CustomerID,
  DATE(Orders.OrderDate) AS OrderDate,
  Orders.City
FROM orders
WHERE Orders.CurrentStatus = 'Rescheduled'
ORDER BY OrderDate
  `;

  if (req.method === "GET") {
    try {
      const response = await new Promise((resolve, reject) => {
        db.query(details, (err, result) => {
          if (err) reject(err);
          else resolve(result); // Assuming result[0] contains the result set of rescheduled orders
        });
      });
      res.status(200).json(response);
    } catch (error) {
      console.error("Database error:", error);
      res
        .status(500)
        .json({ error: "Failed to update and fetch rescheduled orders" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
