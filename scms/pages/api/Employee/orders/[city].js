import db from '../../../db';
import runCors from '../../../cors';

export default async function handler(req, res) {
  await runCors(req, res); // Ensure CORS middleware runs
  const { city } = req.query; // Extract the city from the query params

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const query = `
    SELECT * FROM orders
    WHERE City = ? AND CurrentStatus = 'At Distribution Center'
    ORDER BY RouteID;
  `;

  db.query(query, [city], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch orders.' });
    }
    res.status(200).json(results);
  });
}
