import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

const queryDatabase = (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

export default async function handler(req, res) {
  try {
    await runCors(req, res);
    
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { userData, productId } = req.body;
    const email = userData.email;

    const getCustomerIDQuery = "SELECT CustomerID FROM customer WHERE Email = ?";
    const getCartQuery = "SELECT CartID FROM cart WHERE CustomerID = ?";
    const createCartQuery = "INSERT INTO cart (CustomerID) VALUES (?)";
    const checkCartItemQuery = "SELECT Cart_ItemsID, Quantity FROM cart_items WHERE CartID = ? AND ProductID = ?";
    const updateCartItemQuery = "UPDATE cart_items SET Quantity = Quantity + 1 WHERE CartID = ? AND ProductID = ?";
    const insertCartItemQuery = "INSERT INTO cart_items (CartID, ProductID, Quantity) VALUES (?, ?, ?)";

    try {
      // Get Customer ID
      const customerResults = await queryDatabase(getCustomerIDQuery, [email]);
      if (customerResults.length === 0) {
        return res.status(401).json({ error: "Customer not found" });
      }

      const customerId = customerResults[0].CustomerID;

      // Get Cart ID
      const cartResults = await queryDatabase(getCartQuery, [customerId]);
      let cartId;

      // If cart does not exist, create a new one
      if (cartResults.length === 0) {
        const cartInsertResult = await queryDatabase(createCartQuery, [customerId]);
        cartId = cartInsertResult.insertId;
      } else {
        cartId = cartResults[0].CartID;
      }

      // Check for cart item
      const cartItemResults = await queryDatabase(checkCartItemQuery, [cartId, productId]);
      if (cartItemResults.length > 0) {
        await queryDatabase(updateCartItemQuery, [cartId, productId]);
        return res.status(200).json({ message: "Cart item updated" });
      } else {
        await queryDatabase(insertCartItemQuery, [cartId, productId, 1]); // Assuming quantity starts at 1
        return res.status(201).json({ message: "Item added to cart" });
      }
    } catch (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }
}
