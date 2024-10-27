import { resolve } from "path";
import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";



// const mergeOrdersByOrderID = (orders) => {
//   return orders.reduce((acc, order) => {
//     const { OrderID, CustomerID, OrderDate, TrainCapacityConsumption,City } = order;

//     // Check if the orderID already exists in the accumulator
//     let existingOrder = acc.find((o) => o.OrderID === OrderID);

//     if (existingOrder) {
//       // Add the product details to the existing order's products array
//       existingOrder.TrainCapacityConsumption += TrainCapacityConsumption;
//     } else {
//       const oDate = new Date(OrderDate).toLocaleDateString("en-CA"); // Format: YYYY-MM-DD

//       // Create a new order entry with products as an array
//       acc.push({
//         OrderID,
//         CustomerID,
//         oDate,
//         TrainCapacityConsumption,
//         City,
//       });
//     }

//     return acc;
//   }, []);

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "GET") {
    const report = "call GetCustomerOrders()";
    const reportDetails = await new Promise((resolve,reject) => {
      db.query(report, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    })

    console.log(reportDetails[0]);
    res.status(200).json(reportDetails[0]);
   } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
