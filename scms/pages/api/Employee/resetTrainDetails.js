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

  // const fetchTrainOrders = "select * from resetTrainDetails";

  // if (req.method === "GET") {
  //   const result = await new Promise((resolve, reject) => {
  //     db.query(fetchTrainOrders, (err, result) => {
  //       if (err) reject(err);
  //       else resolve(result);
  //     });
  //   });
  //   res.status(200).json(result);
  console.log("Reset the train details");
  const insertTrainDetailsQuery = `
  UPDATE citytrainallocation 
SET AllocatedCapacity = 300 
WHERE StoreID = 1 AND TrainScheduleID = 1;

UPDATE citytrainallocation 
SET AllocatedCapacity = 200 
WHERE StoreID = 2 AND TrainScheduleID = 1;

UPDATE citytrainallocation 
SET AllocatedCapacity = 150 
WHERE StoreID = 3 AND TrainScheduleID = 2;

UPDATE citytrainallocation 
SET AllocatedCapacity = 150 
WHERE StoreID = 4 AND TrainScheduleID = 2;

UPDATE citytrainallocation 
SET AllocatedCapacity = 300 
WHERE StoreID = 7 AND TrainScheduleID = 3;

UPDATE citytrainallocation 
SET AllocatedCapacity = 150 
WHERE StoreID = 5 AND TrainScheduleID = 4;

UPDATE citytrainallocation 
SET AllocatedCapacity = 200 
WHERE StoreID = 6 AND TrainScheduleID = 5;

UPDATE citytrainallocation 
SET AllocatedCapacity = 200 
WHERE StoreID = 8 AND TrainScheduleID = 4;
 `;

  if (req.method === "POST") {
    await new Promise((reject) => {
      db.query(insertTrainDetailsQuery, (err) => {
        if (err) reject(err);
      });
    });
    res.status(200).json("Updated the train details");

    const fetchTrainOrders = "select * from trainDetails";
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
