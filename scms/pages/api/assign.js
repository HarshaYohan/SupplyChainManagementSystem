import db from '../../backend/db';
import runCors from '../../utils/cors';

export default async function handler(req, res) {
  try {
    await runCors(req, res); // Ensure CORS is applied.

    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { routeId } = req.body;
    if (!routeId) {
      return res.status(400).json({ message: 'Route ID is required' });
    }

   // const today = new Date().toISOString().split('T')[0];
   const today = '2024-10-22';

    // Query for the truck schedule for the given route and today's date.
    const scheduleQuery = `
      SELECT ScheduleID 
      FROM truckschedule 
      WHERE RouteID = ? AND ScheduleDate = ?`;

    db.query(scheduleQuery, [routeId, today], (scheduleError, scheduleResults) => {
      if (scheduleError) {
        console.error('Error fetching schedule:', scheduleError);
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (scheduleResults.length === 0) {
        return res.status(404).json({ message: 'No truck schedule found for this route today' });
      }

      const scheduleId = scheduleResults[0].ScheduleID;

      // Query orders with 'At Distribution Center' status.
      const ordersQuery = `
        SELECT OrderID 
        FROM orders 
        WHERE RouteID = ? AND CurrentStatus = 'At Distribution Center'`;

      db.query(ordersQuery, [routeId], (orderError, orderResults) => {
        if (orderError) {
          console.error('Error fetching orders:', orderError);
          return res.status(500).json({ message: 'Internal server error' });
        }

        if (orderResults.length === 0) {
          return res.status(404).json({ message: 'No orders found for this route' });
        }

        const orderIds = orderResults.map(({ OrderID }) => OrderID);

        // Insert orders into order_schedule table.
        const insertPromises = orderIds.map((orderId) =>
          new Promise((resolve, reject) => {
            const insertQuery = `
              INSERT INTO order_schedule (OrderID, ScheduleID) 
              VALUES (?, ?)`;

            db.query(insertQuery, [orderId, scheduleId], (insertError) => {
              if (insertError) reject(insertError);
              else resolve();
            });
          })
        );

        // After insertion, update the orders' CurrentStatus to 'Ready for delivery'.
        Promise.all(insertPromises)
          .then(() => {
            const updateQuery = `
              UPDATE orders 
              SET CurrentStatus = 'Ready for delivery' 
              WHERE OrderID IN (?)`;

            db.query(updateQuery, [orderIds], (updateError) => {
              if (updateError) {
                console.error('Error updating order statuses:', updateError);
                return res.status(500).json({ message: 'Failed to update order statuses' });
              }

              res.status(200).json({ message: 'Orders successfully assigned and updated' });
            });
          })
          .catch((insertError) => {
            console.error('Error assigning orders:', insertError);
            res.status(500).json({ message: 'Failed to assign orders' });
          });
      });
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ message: 'Unexpected server error' });
  }
}
