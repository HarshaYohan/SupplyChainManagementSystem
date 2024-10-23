import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";



export default async function handler(req, res) {
  await runCors(req, res); // Ensure CORS is applied to this route

  if (req.method === "POST") {
    const { userID } = req.body;

    try {
      const cartID = await getCartID(userID); // Fetch the cart ID
      if (cartID) {
        res.status(200).json({ cartID });
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ message: "Error fetching cart ID" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Helper function to query the database
function getCartID(userID) {
  return new Promise((resolve, reject) => {
    db.query("SELECT get_CartID(?) AS cartID", [userID], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results[0]?.cartID || null);
    });
  });
}
