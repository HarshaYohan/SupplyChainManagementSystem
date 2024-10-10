import db from "../../backend/db.js";
import runCors from "../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "GET") {
    const fetchProductDetails =
      "Select ProductID, ProductName, Price, productURL from product";
    db.query(fetchProductDetails, (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
      return res.status(200).json(results);
    });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
