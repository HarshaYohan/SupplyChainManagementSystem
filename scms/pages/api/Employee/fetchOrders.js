import { resolve } from "path";
import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

const mergeOrdersByOrderID = (orders) => {
  return orders.reduce((acc, order) => {
    const { OrderID, CustomerID, OrderDate, TrainCapacityConsumption,City } = order;

    // Check if the orderID already exists in the accumulator
    let existingOrder = acc.find((o) => o.OrderID === OrderID);

    if (existingOrder) {
      // Add the product details to the existing order's products array
      existingOrder.TrainCapacityConsumption += TrainCapacityConsumption;
    } else {
      const oDate = new Date(OrderDate).toLocaleDateString("en-CA"); // Format: YYYY-MM-DD

      // Create a new order entry with products as an array
      acc.push({
        OrderID,
        CustomerID,
        oDate,
        TrainCapacityConsumption,
        City,
      });
    }

    return acc;
  }, []);
};

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    res.status(500).json({ error: "CORS failed" });
    return;
  }

  const fetchOrders = "select * from orderDetails";

  if (req.method === "GET") {
    const results = await new Promise((resolve, reject) => {
      db.query(fetchOrders, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
    const orders = mergeOrdersByOrderID(results);
    console.log(orders);
    res.status(200).json(orders);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
