import db from "../../../../backend/db.js";
import runCors from "../../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    // Ensure CORS is properly handled before proceeding
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    res.status(500).json({ error: "CORS failed" });
    return;
  }

  const { method } = req;
  const { id } = req.query;

  console.log("Request body:", req.body); // Log request body for debugging

  if (method === "PUT") {
    try {
      const { status } = req.body;
      const today=new Date().toISOString().split('T')[0];

      if (!status || !id) {
        return res.status(400).json({ message: "Status and ID are required" });
      }

      const result = await new Promise((resolve, reject) => {
        db.query(
          `UPDATE Orders SET CurrentStatus = ?, DeliveryDate = ? WHERE OrderID = ?`,
          [status, today, id],
          (error, results) => {
            if (error) {
              return reject(error);
            }
            resolve(results);
          }
        );
      });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.status(200).json({ message: "Order status updated successfully" });
    } catch (error) {
      console.error("Error updating order status:", error);
      res.status(500).json({ message: "Error updating order status", error });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
