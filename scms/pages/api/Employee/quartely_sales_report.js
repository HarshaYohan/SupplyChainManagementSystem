import { resolve } from "path";
import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";
import { rejects } from "assert";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "GET") {
    try {
      const report = "CALL GetTopQuarterlyProducts()";
      const reportDetails = await new Promise((resolve, rejects) => {
        db.query(report, (err, result) => {
          if (err) rejects(err);
          resolve(result);
        });
      });
      console.log(reportDetails[0]);
      res.status(200).json(reportDetails[0]); // Send the rows in JSON format as a response
    } catch (error) {
      console.error("Database query error:", error);
      res.status(500).json({ error: "Failed to retrieve data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
