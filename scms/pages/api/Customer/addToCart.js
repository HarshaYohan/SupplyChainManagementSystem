// pages/api/Customer/addToCart.js

import runCors from '../../../utils/cors'; // Adjust the path to your CORS setup
import db from '../../../backend/db'; // Import the existing db connection

export default async function handler(req, res) {
  await runCors(req, res); // Ensure CORS is applied to the request

  if (req.method === 'POST') {
    const { userData, productId, quantity } = req.body;

    if (!userData || !productId || !quantity) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const customerId = userData.userId; // Get the customer ID from user data

    try {
      // Use the existing db connection to call the stored procedure
      db.query(
        'CALL ManageCartItem(?, ?, ?)',
        [customerId, productId, quantity],
        (error, results) => {
          if (error) {
            console.error('Error adding item to cart:', error);
            return res.status(500).json({ error: 'Failed to add item to cart.' });
          }
          return res.status(200).json({ message: 'Item added to cart successfully!', results });
        }
      );
    } catch (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'Failed to add item to cart.' });
    }
  } else {
    // Handle any other HTTP method
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
