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
    const { userData, root, cartItems } = req.body;
    console.log(req.body);

    const orderDate = new Date().toISOString().split("T")[0];
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);
    const orderDetails = cartItems.map((item) => [
      item.ProductID,
      item.Quantity,
    ]);

    const getCustomerIDQuery =
      "select CustomerID from customer where Email = ?";
    const getRouteID = "Select RouteID from route where RouteDescription = ?";
    const placeOrder =
      "INSERT INTO order_ (CustomerID, OrderDate, DeliveryDate, RouteID, DeliveryAddress, CurrentStatus) VALUES (?,?,?,?,?,?)";
    const orderDetailsQuery =
      "insert into order_product (OrderID,ProductID,Quantity) values (?,?,?)";

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
            customerID[0].CustomerID,
            orderDate,
            deliveryDate,
            routeID[0].RouteID,
            "32/kandy",
            "Pending",
          ],
          (err, result) => {
            if (err) {
              console.log(err);
            }
            const lastInsertID = result.insertId;

            db.query(orderDetailsQuery, [lastInsertID, orderDetails]);
          }
        );
      });
    });
  } else {
    return res.status(405).json({ message: "Methos does not allowed" });
  }
}
// import db from "../../backend/db.js";
// import runCors from "../../utils/cors.js";

// export default async function handler(req, res) {
//   try {
//     await runCors(req, res);
//   } catch (error) {
//     console.error("CORS error:", error);
//     return res.status(500).json({ error: "CORS failed" });
//   }

//   if (req.method === "POST") {
//     const { userData, selectedRoot, cartItems } = req.body;

//     const orderDate = new Date().toISOString().split("T")[0];
//     const deliveryDate = new Date();
//     deliveryDate.setDate(deliveryDate.getDate() + 7);
    
//     const orderDetails = cartItems.map(item => [
//       item.ProductID,
//       item.Quantity,
//     ]);

//     try {
//       // Get CustomerID
//       const [customerIDResult] = await new Promise((resolve, reject) => {
//         db.query("SELECT CustomerID FROM customer WHERE Email = ?", [userData.email], (err, results) => {
//           if (err) return reject(err);
//           resolve(results);
//         });
//       });

//       const customerID = customerIDResult.CustomerID;

//       // Get RouteID
//       const [routeIDResult] = await new Promise((resolve, reject) => {
//         db.query("SELECT RouteID FROM route WHERE RouteDescription = ?", [selectedRoot], (err, results) => {
//           if (err) return reject(err);
//           resolve(results);
//         });
//       });

//       const routeID = routeIDResult.RouteID;

//       // Place Order
//       const [orderResult] = await new Promise((resolve, reject) => {
//         db.query(
//           "INSERT INTO order_ (CustomerID, OrderDate, DeliveryDate, RouteID, DeliveryAddress, CurrentStatus) VALUES (?, ?, ?, ?, ?, ?)",
//           [customerID, orderDate, deliveryDate, routeID, "32/kandy", "Pending"],
//           (err, results) => {
//             if (err) return reject(err);
//             resolve(results);
//           }
//         );
//       });

//       const lastInsertID = orderResult.insertId;

//       // Prepare order details for insertion
//       const orderDetailsQuery = "INSERT INTO order_product (OrderID, ProductID, Quantity) VALUES ?";
//       await new Promise((resolve, reject) => {
//         db.query(orderDetailsQuery, [lastInsertID,orderDetails], (err, results) => {
//           if (err) return reject(err);
//           resolve(results);
//         });
//       });

//       return res.status(200).json({ message: "Order placed successfully!" });
//     } catch (err) {
//       console.error("Error processing order:", err);
//       return res.status(500).json({ error: "Error processing order" });
//     }
//   } else {
//     return res.status(405).json({ message: "Method not allowed" });
//   }
// }
