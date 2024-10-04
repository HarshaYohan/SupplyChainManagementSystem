import db from "../../backend/db.js";
import runCors from "../../utils/cors.js";
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const { email, password } = req.body;
    const query = "SELECT * FROM employee WHERE Email = ?";
    db.query(query, [email], async (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "Incorrect email or password. Try again." });
      }

      const user = results[0];

      try {
        const isMatch = await bcrypt.compare(password, user.Hash_Password);

        if (isMatch) {
          return res.status(200).json({ message: "Login successful" });
        } else {
          return res.status(401).json({ error: "Incorrect email or password. Try again." });
        }
      } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
      }
    });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
