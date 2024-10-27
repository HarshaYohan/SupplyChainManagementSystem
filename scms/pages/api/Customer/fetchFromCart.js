import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const { userData } = req.body; // userData now contains userId directly
    const userId = userData.userId;

    try {
      const cartItems = await new Promise((resolve, reject) => {
        db.query(
          `SELECT Product.ProductID, Product.ProductName, Product.Price, Cart_Items.Quantity
           FROM cart_items
           INNER JOIN Product ON cart_items.ProductID = Product.ProductID
           INNER JOIN cart ON cart_items.CartID = cart.CartID
           WHERE cart.CustomerID = ?`,
          [userId],
          (err, results) => {
            if (err) return reject(err);
            resolve(results);
          }
        );
      });

      if (cartItems.length === 0) {
        return res.status(404).json({ error: "No cart items available" });
      }

      return res.status(200).json(cartItems);
    } catch (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
