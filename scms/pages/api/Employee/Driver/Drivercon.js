import db from "../../../../backend/db.js";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  console.log("Request body:", req.body); // Log the incoming request body

  if (method === "PUT") {
    try {
      const { status } = req.body;
      console.log(status);
      const [result] = await db.query(
        `UPDATE Orders SET CurrentStatus = ? WHERE OrderID = ?`,
        [status, id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.status(200).json({ message: "Order status updated successfully" });
    } catch (error) {
      console.error("Error updating order status:", error);
      res.status(500).json({ message: "Error updating order status", error });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
