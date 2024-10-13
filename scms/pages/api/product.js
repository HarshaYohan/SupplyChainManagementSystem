import { resolve } from "path";
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
    const getProductQuery = "call getProductDetails()";

    try {
      const result = await new Promise((resolve, reject) => {
        db.query(getProductQuery, (err, result) => {
          if (err) reject(err);
          resolve(result);
        });
      });
      const products = result[0]; // Procedure outputs two arrays. Our product results and details about query. So, filter only product details.
      return res.status(200).json(products);
    } catch (err) {
      console.error("Database error:", err);
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
