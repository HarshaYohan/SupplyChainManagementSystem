import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    res.status(500).json({ error: "CORS failed" });
    return;
  }

  const { orderID } = req.body;
  console.log(req.body);

  const updateStatusQuery =
    "call UpdateOrderStatusToRescheduled(?)";

  const fetchRescheduleOrdersQuery = `
  select Orders.OrderID,Orders.CustomerID,Date(orders.OrderDate) as OrderDate,City
  from orders
  where CurrentStatus = 'Rescheduled'
  order by OrderDate;
  `;

  if (req.method === "POST") {
    await new Promise((resolve,reject) => {
      db.query(updateStatusQuery, [req.body.OrderID], (err) => {
        if (err) reject(err);
        resolve();
      });
    });

    const response = await new Promise((resolve, reject) => {
      db.query(fetchRescheduleOrdersQuery, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
    console.log(response[0]);
    res.status(200).json(response);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
