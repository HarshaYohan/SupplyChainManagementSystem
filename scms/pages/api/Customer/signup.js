import { ClientPageRoot } from "next/dist/client/components/client-page.js";
import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";
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
      const hashPassword = await bcrypt.hash(password, saltRounds);

      const isUniqueQuery = "SELECT check_unique_email(?) AS is_unique";
      const isUniqueResult = await new Promise((resolve, reject) => {
        db.query(isUniqueQuery, [email], (err, result) => {
          if (err) return reject(err);
          resolve(result[0].is_unique);
        });
      });

      if (!isUniqueResult) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const insertQuery = " add_customer (?, ?, ?, ?, ?) AS InsertCustomer";
      const response = await new Promise((resolve, reject) => {
        db.query(
          insertQuery,
          [fullname, address, phonenumber, email, hashPassword],
          (err, results) => {
            if (err) return reject(err);
            resolve(results[0].InsertCustomer);
          }
        );
      });

      console.log(response);
      res.status(200).json({ message: "Signup successful", role: "customer" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to insert values" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
