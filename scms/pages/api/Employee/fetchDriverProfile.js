import db from '../../../backend/db'; 

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  const query = 'SELECT Name, Email, Address, PhoneNumber FROM employee WHERE Email = ?';

  db.query(query, [email], (error, results) => {
    if (error) {
      console.error('Error fetching driver profile:', error);
      return res.status(500).json({ message: 'Error fetching driver profile.' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Driver not found.' });
    }


    const driverProfile = results[0];
    return res.status(200).json(driverProfile);
  });
}
