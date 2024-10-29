// /pages/api/orders.js
import db from "../../../backend/db";

export default async function handler(req, res) {
  const { storeID } = req.query;

  try {
    const [orders] = await db.query(
      `SELECT OrderID, OrderDescription, Status 
       FROM orders 
       WHERE StoreID = ? AND Status = 'At Distribution Center'`,
      [storeID]
    );

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
