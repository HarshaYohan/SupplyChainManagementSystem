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

    const getCustomerIDQuery =
      "select CustomerID from customer where Email = ?";
    const getRouteID = "Select RouteID from route where RouteDescription = ?";
    const placeOrder =
      "INSERT INTO orders (CustomerID, OrderDate, DeliveryDate, RouteID, DeliveryAddress, CurrentStatus, City) VALUES (?,?,?,?,?,?,?)";
    const orderDetailsQuery =
      "insert into order_product (OrderID,ProductID,Quantity) values ?";

    db.query(getCustomerIDQuery, [userData.email], (err, customerID) => {
      if (err) {
        console.log(err);
      }

      db.query(getRouteID, [req.body.selectedRoot], (err, routeID) => {
        if (err) {
          console.log(err);
        }

        db.query(
          placeOrder,
          [
            userData.customerID,
            orderDate,
            deliveryDate,
            routeID[0].RouteID,
            "32/kandy",
            "Pending",
            req.body.selectedStore,
          ],
          (err, result) => {
            if (err) {
              console.log(err);
            }
            const orderID = 27;
            const orderDetails = cartItems.map((item) => [
              orderID,
              item.ProductID,
              item.Quantity,
            ]);
            console.log(orderDetails);
            db.query(orderDetailsQuery, [orderDetails], (err, r) => {
              if (err) console.log(err);
              console.log(r);
            });
          }
        );
      });
    });
  } else {
    return res.status(405).json({ message: "Methos does not allowed" });
  }
}
