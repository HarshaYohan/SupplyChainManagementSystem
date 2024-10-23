import db from "../../../backend/db.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.query;

  try {
    const [rows] = await db.promise().query(
      "SELECT get_customer_id(?) AS customerId",
      [email]
    );
    const customerId = rows[0]?.customerId || null;
    res.status(200).json({ customerId });
  } catch (error) {
    console.log(error);
    console.error("Database Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
