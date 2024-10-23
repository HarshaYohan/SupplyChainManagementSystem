// /pages/api/store/getStoreDetails.js
import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {  
    const { email } = req.body;  

    const getName = `SELECT Name FROM employee WHERE Email = ?`;

    db.query(getName, [email], (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch Manager details" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "No employee found with this email" });
      }
      res.json({ name: results[0].Name });
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
