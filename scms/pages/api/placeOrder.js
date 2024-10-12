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
    const { userData, root } = req.body;
  
    const orderDate = new Date().toISOString().split("T")[0];
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);

    const getCustomerIDQuery =
      "select CustomerID from customer where Email = ?";
    const getRouteID = "Select RouteID from route where RouteDescription = ?";
    const placeOrder =
      "INSERT INTO order_ (CustomerID, OrderDate, DeliveryDate, RouteID, DeliveryAddress, CurrentStatus) VALUES (?,?,?,?,?,?)";

    db.query(getCustomerIDQuery, [userData.email], (err, customerID) => {
      if (err) {
        console.log(err);
      }
      console.log(customerID);
      db.query(getRouteID, [req.body.selectedRoot], (err, routeID) => {
        if (err) {
          console.log(err);
        }

        console.log(routeID);
        db.query(placeOrder, [
          customerID[0].CustomerID,
          orderDate,
          deliveryDate,
          routeID[0].RouteID,
          "32/kandy",
          "Pending",
        ]);
      });
    });
  } else {
    return res.status(405).json({ message: "Methos does not allowed" });
  }
}
