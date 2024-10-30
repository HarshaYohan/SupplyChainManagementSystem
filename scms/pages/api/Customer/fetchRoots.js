import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res);
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const cityname = req.body['store'];

    const getStoreID = "SELECT StoreID FROM store WHERE CityName = ?";
    db.query(getStoreID, [cityname], async (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
      if (results.length === 0) {
        return res.status(401).json({ error: "No Store Available" });
      } else {
        const getRoots = "SELECT RouteID, RouteDescription FROM route WHERE StoreID = ?";
        db.query(getRoots, [results[0].StoreID], (err, resultRoutes) => {
          if (err) {
            return res.status(500).json({ error: "Database error" });
          }
          return res.status(200).json(resultRoutes); 
        });
      }
    });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
