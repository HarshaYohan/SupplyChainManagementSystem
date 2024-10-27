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

  const { ID, newCapacity, city, OrderID } = req.body;

  console.log(req.body);

  const updateCapacityQuery = `
  UPDATE citytrainallocation
  SET AllocatedCapacity = ?
  WHERE TrainScheduleID = ? AND StoreID = ?;
  `;

  const statusUpdateQuery = `
    UPDATE Orders
    SET CurrentStatus = 'In Transit to Store'
    WHERE OrderID = ?;
  `;

  const getIDQuery = "SELECT getStoreID(?) as storeID";

  if (req.method === "POST") {
    try {
      const resultID = await new Promise((resolve, reject) => {
        db.query(getIDQuery, [req.body.City], (err, result) => {
          if (err) reject(err);
          resolve(result);
        });
      });
      console.log(resultID[0].storeID)

      await new Promise((resolve, reject) => {
        db.query(
          updateCapacityQuery,
          [req.body.NewCapacity, req.body.TrainID, resultID[0].storeID],
          (err, result) => {
            if (err) return reject(err);
            resolve(result);
          }
        );
      });

      await new Promise((resolve, reject) => {
        db.query(statusUpdateQuery, [req.body.OrderID], (err, result) => {
          if (err) return reject(err);
          resolve(result);
        });
      });

      res.status(200).json({ message: "Allocation updated successfully" });
    } catch (error) {
      console.error("Database update error:", error);
      res.status(500).json({ error: "Database update failed" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
