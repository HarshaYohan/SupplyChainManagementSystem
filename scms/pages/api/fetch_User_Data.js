import db from "../../backend/db.js";
import runCors from "../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const { email } = req.body;

    const userData = "call getUserData(?)";
    const result = await new Promise((resolve, reject) => {
      db.query(userData, email, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
    const data = result[0][0];
    return res.status(200).json(data);
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
