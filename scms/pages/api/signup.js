import db from "../../backend/db.js";
import runCors from "../../utils/cors.js";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const { fullname, address, phonenumber, email, password } = req.body;
    const saltRounds = 10;

    try {
      // Hash the password
      const hashPassword = await bcrypt.hash(password, saltRounds);

      const checkQuery = "SELECT * FROM customer WHERE Email = ?";
      const existingCustomer = await new Promise((resolve, reject) => {
        db.query(checkQuery, [email], (err, result) => {
          if (err) return reject(err);
          resolve(result);
        });
      });

      if (existingCustomer.length > 0) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const insertQuery =
        "INSERT INTO customer (CustomerName, Address, CityID, PhoneNumber, Email, Hash_Password) VALUES (?, ?, ?, ?, ?, ?)";
      await new Promise((resolve, reject) => {
        db.query(
          insertQuery,
          [fullname, address, "1", phonenumber, email, hashPassword],
          (err, result) => {
            if (err) return reject(err);
            resolve(result);
          }
        );
      });

      return res.status(200).json({ message: "Customer added successfully" });
    } catch (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Failed to insert values" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
