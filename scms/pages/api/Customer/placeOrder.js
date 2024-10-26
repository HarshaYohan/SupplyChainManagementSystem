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
    const { userData, root, store, cartItems } = req.body;

    const orderDate = new Date().toISOString().split("T")[0];
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);

    const placeOrderQuery = "call  placeOrder(?,?,?,?,?,?)";
    const orderDetailsQuery =
      "insert into order_product (OrderID,ProductID,Quantity) values ?";

    const result = await new Promise((resolve, reject) => {
      db.query(
        placeOrderQuery,
        [
          req.body.selectedStore,
          orderDate,
          deliveryDate,
          "24/halawatha",
          userData.email,
          req.body.selectedRoot,
        ],
        (err,result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
    console.log(result[0][0].OrderID);
    const orderDetails = cartItems.map((item) => [
      result[0][0].OrderID,

      item.ProductID,
      item.Quantity,
    ]);
    db.query(orderDetailsQuery, [orderDetails], (err) => {
      if (err) console.log(err);
    });
  } else {
    return res.status(405).json({ message: "Methos does not allowed" });
  }
}
