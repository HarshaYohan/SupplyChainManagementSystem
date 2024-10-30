// Filename: /api/Employee/updateProductStatus.js
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
    const { orderId } = req.body;
    const query = `
      UPDATE orders 
      SET CurrentStatus = 'At Distribution Center'
      WHERE OrderID = ?
    `;

  db.query(query, [orderId], (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to update product status" });
    }
    res.json({ message: "Status updated successfully" });
  });

    } else {
      res.status(405).json({ message: "Method not allowed" });
  }
}
