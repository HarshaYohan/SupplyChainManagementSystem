import db from '../../backend/db';
import runCors from '../../utils/cors';

export default async function handler(req, res) {
  await runCors(req, res); // Ensure CORS is handled.

  if (req.method === 'GET') {
    const store = JSON.parse(req.headers.store);

    // Fetch orders using callback style to avoid promise errors.
    const query = `
      SELECT RouteID, OrderID, OrderDate, DeliveryAddress 
      FROM orders 
      WHERE CurrentStatus = 'At Distribution Center' 
      AND City = ?`;

    db.query(query, [store.city], (error, results) => {
      if (error) {
        console.error('Error fetching orders:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }

      const groupedOrders = results.reduce((groups, order) => {
        const { RouteID } = order;
        if (!groups[RouteID]) groups[RouteID] = [];
        groups[RouteID].push(order);
        return groups;
      }, {});

      res.status(200).json(groupedOrders);
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
