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

  console.log(req.body);

  const updateStatusQuery =
    "update orders set CurrentStatus = 'Pending' where OrderID = ?";

  if (req.method === "POST") {
    await new Promise((resolve,reject) => {
      db.query(updateStatusQuery, [req.body.OrderID], (err) => {
        if (err) reject(err);
        resolve();
      });
    });

  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
