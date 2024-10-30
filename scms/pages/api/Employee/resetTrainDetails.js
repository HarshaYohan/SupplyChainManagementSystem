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

  const fetchTrainOrders = "select * from resetTrainDetails";
  const updateQuery = `
  UPDATE citytrainallocation
  SET AllocatedCapacity = CASE
    WHEN CityTrainAllocationID = 1 THEN 300
    WHEN CityTrainAllocationID = 3 THEN 200
    WHEN CityTrainAllocationID = 5 THEN 200
    WHEN CityTrainAllocationID = 6 THEN 250
    WHEN CityTrainAllocationID = 7 THEN 300
    WHEN CityTrainAllocationID = 8 THEN 150
    WHEN CityTrainAllocationID = 9 THEN 200
    WHEN CityTrainAllocationID = 10 THEN 200
    ELSE AllocatedCapacity
END;
  `;

  if (req.method === "POST") {
    await new Promise((reject) => {
      db.query(updateQuery, (err) => {
        if (err) reject(err);
      });
    });

    const result = await new Promise((resolve, reject) => {
      db.query(fetchTrainOrders, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
    res.status(200).json(result);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
