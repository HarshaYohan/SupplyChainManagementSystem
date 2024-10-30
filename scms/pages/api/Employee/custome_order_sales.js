import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

const mergeOrdersByCustomerID = (orders) => {
  return orders.reduce((acc, order) => {
    const { CustomerID, CustomerName, TotalAmount } = order;

    // Find existing order by CustomerID in the accumulator
    let existingOrder = acc.find((o) => o.CustomerID === CustomerID);

    if (existingOrder) {
      // If the CustomerID exists, add the TotalAmount to the existing entry
      existingOrder.TotalAmount = (
        parseFloat(existingOrder.TotalAmount) + parseFloat(TotalAmount)
      ).toFixed(2); // Ensure TotalAmount is a string in fixed decimal format
    } else {
      // If the CustomerID does not exist, create a new entry
      acc.push({
        CustomerID,
        CustomerName,
        TotalAmount: parseFloat(TotalAmount).toFixed(2),
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
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "GET") {
    const report = "call GetCustomerOrders()";
    try {
      const reportDetails = await new Promise((resolve, reject) => {
        db.query(report, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });

      const mergedResults = mergeOrdersByCustomerID(reportDetails[0]);
      res.status(200).json(mergedResults);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Database query failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}