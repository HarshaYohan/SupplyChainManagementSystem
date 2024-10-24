import db from "../../../backend/db";
import runCors from "../../../utils/cors";

export default async function handler(req, res) {
  await runCors(req, res);  // Apply CORS

  if (req.method === "POST") {
    const { orderID } = req.body;

    try {
      const query = `
        SELECT p.ProductID, p.ProductName, op.Quantity
        FROM order_product op
        JOIN product p ON op.ProductID = p.ProductID
        WHERE op.OrderID = ?`;

      db.query(query, [orderID], (err, results) => {
        if (err) {
          console.error("Error fetching order products:", err);
          return res.status(500).json({ error: "Failed to fetch order products." });
        }
        res.status(200).json(results);
      });
    } catch (error) {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
