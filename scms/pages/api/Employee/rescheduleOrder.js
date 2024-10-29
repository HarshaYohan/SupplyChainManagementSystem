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

  if (req.method === "POST") {
    const { orderID } = req.body;

    try {
      const response = await new Promise((resolve, reject) => {
        db.query("CALL UpdateAndFetchRescheduledOrders(?)", [req.body.OrderID], (err, result) => {
          if (err) reject(err);
          else resolve(result[0]); // Assuming result[0] contains the result set of rescheduled orders
        });
      });
      res.status(200).json(response);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to update and fetch rescheduled orders" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
