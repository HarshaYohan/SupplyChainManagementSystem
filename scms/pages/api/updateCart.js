import db from "../../backend/db.js";
import runCors from "../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res); // Ensure CORS headers are correctly applied
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const { productName } = req.body;

    const getProductID = "select ProductID from product where ProductName = ?";
    db.query(getProductID, [productName], (err, result) => {
      if (err) {
        console.log(err);
        return; // Handle the error appropriately
      }

      // Assuming result is an array and you're expecting one row
      if (result.length > 0) {
        const productID = result[0].ProductID;
        console.log(productID); // Log the product ID
        const updateCartItems = "DELETE FROM cart_items WHERE ProductID = ?";
        db.query(updateCartItems, productID, (err) => {
          if (err) console.log(err);
        });
      } else {
        console.log("Product not found");
      }
    });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
