import { resolve } from "path";
import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "GET") {
    const report = "CALL GetSalesByCityAndRoute()";
    const reportDetails = await new Promise((resolve, reject) => {
      db.query(report, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.status(200).json(reportDetails[0]);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}