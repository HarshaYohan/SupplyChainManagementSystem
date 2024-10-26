import { resolve } from "path";
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

  const fetchTrainOrders = "select * from trainschedule";

  if (req.method === "GET") {
    const result = await new Promise((resolve, reject) => {
      db.query(fetchTrainOrders, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
    res.status(200).json(result);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
