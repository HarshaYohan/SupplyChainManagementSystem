// pages/api/placeOrder.js
import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }


        if (req.method === 'POST') {
            const { CustomerID, OrderDate, RouteID, DeliveryAddress, CartID, City } = req.body;


            // Validate request body
            if (!CustomerID || !OrderDate || !RouteID || !DeliveryAddress || !CartID || !City) {
                res.status(400).json({ message: 'All fields are required' });
                return; // Ensure the function ends here
            }

            // Call the stored procedure to place the order
            const [results] = await db.promise().query(
                'CALL AddOrder(?, ?, ?, ?, ?,?)',
                [CustomerID, OrderDate, RouteID, DeliveryAddress, CartID, City]
            );

            //const orderId = results[0][0].OrderID;

            // Send a successful response
           res.status(200).json({ message: 'Order placed successfully' });
        } else {
            // Handle unsupported HTTP methods
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    }