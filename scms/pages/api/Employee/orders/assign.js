import db from '../../../db';
import runCors from '../../../cors';

export default async function handler(req, res) {
  await runCors(req, res); // Ensure CORS middleware runs

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { orderId, scheduleId } = req.body;

  const updateOrderStatus = `
    UPDATE orders SET CurrentStatus = 'Ready for Delivery' WHERE OrderID = ?;
  `;
  const assignOrderQuery = `
    INSERT INTO truck_order (OrderID, ScheduleID) VALUES (?, ?);
  `;

  db.query(updateOrderStatus, [orderId], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update order status.' });
    }

    db.query(assignOrderQuery, [orderId, scheduleId], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to assign order to schedule.' });
      }
      res.status(200).json({ message: 'Order assigned to truck schedule.' });
    });
  });
}
