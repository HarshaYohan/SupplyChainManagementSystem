import { resolve } from "path";
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
    const { email, password } = req.body;
    const getUserQuery = "Select check_Employee_email(?) as email_checker";

    const getUser = (email) => {
      return new Promise((resolve, reject) => {
        db.query(getUserQuery, [email], (err, results) => {
          if (err) reject(err);
          else !results ? resolve("User not found") : resolve(results);
        });
      });
    };

    const checkPassword = (password, hash_password) => {
      return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash_password, (err, isMatch) => {
          if (err) reject(err);
          if (!isMatch) reject("Incorrect Password");
          else resolve(true);
        });
      });
    };

    try {
      const user = await getUser(email);
      await checkPassword(password, user[0].email_checker.password);
      res.send(user[0].email_checker);
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      res.status(400).json({ error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
