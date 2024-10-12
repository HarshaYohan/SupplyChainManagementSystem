import db from "../../backend/db.js";
import runCors from "../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const { userData } = req.body;
    console.log(req.body);

    try {
      const customerResults = await new Promise((resolve, reject) => {
        db.query(
          "SELECT CustomerID FROM customer WHERE Email = ?",
          [userData.email],
          (err, results) => {
            if (err) return reject(err);
            resolve(results);
          }
        );
      });

      if (customerResults.length === 0) {
        return res.status(401).json({ error: "Customer not found" });
      }

      const customerId = customerResults[0].CustomerID;

      const cartItems = await new Promise((resolve, reject) => {
        db.query(
          `SELECT Product.ProductName, Product.Price, Cart_Items.Quantity
           FROM cart_items
           INNER JOIN Product ON cart_items.ProductID = Product.ProductID
           INNER JOIN cart ON cart_items.CartID = cart.CartID
           INNER JOIN customer ON cart.CustomerID = customer.CustomerID
           WHERE customer.CustomerID = ?`,
          [customerId],
          (err, results) => {
            if (err) return reject(err);
            resolve(results);
          }
        );
      });

      if (cartItems.length === 0) {
        return res.status(401).json({ error: "No cart items available" });
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
