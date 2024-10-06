import db from "../../backend/db.js";
import runCors from "../../utils/cors.js";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    res.status(500).json({ error: "CORS failed" });
    return;
  }

  if (req.method === "POST") {
    const { fullname, address, phonenumber, email, password } = req.body;
    const saltRounds = 10;

    try {
      const hashPassword = await bcrypt.hash(password, saltRounds);
      const query =
        "INSERT INTO customer (CustomerName,Address, CityID,PhoneNumber, Email, Hash_Password) VALUES (?, ?, ?, ?, ?, ?)";

      db.query(query, [
        fullname,
        address,
        "1",
        phonenumber,
        email,
        hashPassword,
      ]);

      res.status(200).json({ message: "Values inserted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to insert values" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
