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
    const { name, email, phone, address } = req.body;
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(address);

    const query = `
    UPDATE employee
    SET Name = ?, PhoneNumber = ?, Address = ?,Email = ?
    WHERE Employee_ID = 4;
    `;

    // Pass the employeeId as the last parameter
    db.query(query, [name, phone, address, email], (err, results) => {
      if (err) {
        console.error("Database error:", err); // Log the error for debugging
        return res.status(500).json({ error: "Database error" });
      }

      // Check if any rows were affected
      if (results.affectedRows === 0) {
        return res
          .status(404)
          .json({ error: "User not found or no changes made." });
      }

      // Send a success response
      res.status(200).json({ message: "Values updated successfully" });
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
