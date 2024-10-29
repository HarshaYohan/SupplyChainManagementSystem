import db from "../../../backend/db";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res); // Run CORS for incoming requests
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" }); // Allow only POST
  }

  const { storeID, date } = req.body; // Extract `storeID` and `date` from the request body

  if (!storeID || !date) {
    return res.status(400).json({ error: "Missing storeID or date" }); // Validate required parameters
  }

  try {
    console.log("Received storeID:", storeID);
    console.log("Received date:", date);

    // Fetch routes for the store
    const routes = await new Promise((resolve, reject) => {
      db.query(
        `SELECT RouteID, RouteDescription, MaxTimeHrs 
         FROM route 
         WHERE StoreID = ?`,
        [storeID],
        (error, results) => {
          if (error) reject(error);
          else resolve(results);
        }
      );
    });

    // Fetch available trucks for the given date
    const trucks = await new Promise((resolve, reject) => {
      db.query(
        `SELECT TruckID, TruckNumber, Capacity
         FROM truck
         WHERE truck.StoreID=? and
          TruckID NOT IN (
           SELECT TruckID 
           FROM truckschedule 
           WHERE ScheduleDate = ?
         )`,
        [storeID,date],
        (error, results) => {
          if (error) reject(error);
          else resolve(results);
        }
      );
    });

    console.log("Fetched routes:", routes);
    console.log("Fetched trucks:", trucks);

    res.status(200).json({ routes, trucks }); // Send successful response
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Failed to fetch routes or trucks" });
  }
}
