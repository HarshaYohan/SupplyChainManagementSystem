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
    const { productID, cartID } = req.body; // Receive ProductID
    console.log(productID);

    const updateCartItems = "DELETE FROM cart_items WHERE ProductID = ? and CartID = ?";
    db.query(updateCartItems, [productID, cartID], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Failed to update cart" });
      }
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "Item removed from cart" });
      } else {
        res.status(404).json({ message: "Product not found in cart" });
      }
    });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
