import db from "../../../backend/db";
import runCors from "../../../utils/cors";

export default async function handler(req, res) {
  await runCors(req, res);  // Apply CORS

  if (req.method === "POST") {
    const { customerID } = req.body;

    try {
      const query = "SELECT OrderID, CurrentStatus,OrderDate,Amount FROM orders WHERE CustomerID = ?";
      db.query(query, [customerID], (err, results) => {
        if (err) {
          console.error("Error fetching orders:", err);
          return res.status(500).json({ error: "Failed to fetch orders." });
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
