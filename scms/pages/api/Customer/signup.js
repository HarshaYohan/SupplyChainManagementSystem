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

      const isUnique = "select check_unique_email(?) as  is_unique";
      const isUniqueResult = await new Promise((resolve, reject) => {
        db.query(isUnique, [email], (err, result) => {
          if (err) return reject(err);
          resolve(result);
        });
      });

      if (!isUniqueResult[0].is_unique) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const insertQuery = "select add_customer (?, ?, ?, ?, ?) as InsertCustomer";
      const response = await new Promise((resolve, reject) => {
        db.query(
          insertQuery,
          [fullname, address, phonenumber, email, hashPassword],
          (err, results) => {
            if (err) reject(err);
            resolve(results);
            resolve("Signup Successfully");
          }
        );
      });
      console.log(response[0].InsertCustomer);
      return res.status(200).json(response[0].InsertCustomer);
    } catch (error) {
      return res.status(500).json({ error: "Failed to insert values" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
