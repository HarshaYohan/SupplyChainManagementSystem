import db from '../../../db';
import runCors from '../../../cors';

export default async function handler(req, res) {
  await runCors(req, res); // Ensure CORS middleware runs
  const { routeId } = req.query; // Extract routeId from query params

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const query = `
    SELECT * FROM truckschedule 
    WHERE RouteID = ? AND ScheduleDate = CURDATE();
  `;

  db.query(query, [routeId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch truck schedules.' });
    }
    res.status(200).json(results);
  });
}
