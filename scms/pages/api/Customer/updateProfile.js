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
    const { customerID, name, address, phone, email } = req.body;
    console.log(req.body);
    console.log(customerID);

    const query = `
    UPDATE customer
    SET CustomerName = ?, Address = ?, PhoneNumber = ?,Email = ?
    WHERE CustomerID = ?;
    `;


    db.query(
      query,
      [name, address, phone, email, customerID],
      (err, results) => {
        if (err) {
          return res.status(500).json({ error: "Database error" });
        }
        if (results.affectedRows === 0) {
          return res
            .status(404)
            .json({ error: "User not found or no changes made." });
        }

        res.status(200).json({ message: "Values updated successfully" });
      }
    );
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
