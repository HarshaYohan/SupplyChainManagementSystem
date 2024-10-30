import db from "../../../../backend/db.js";
import runCors from "../../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    // Ensure CORS is handled
    await runCors(req, res);

    const { email } = req.body;
    console.log(email);

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    console.log("Fetching driver ID for email:", email);

    if (req.method === "POST") {
      const startTime = new Date();
      try {
        // Get driver information by email
        const driverData = await new Promise((resolve, reject) => {
          db.query(`CALL GetDriverIDByEmail(?)`, [email], (error, results) => {
            if (error) return reject(error);
            resolve(results);
          });
        });

        if (!driverData[0] || driverData[0].length === 0) {
          return res.status(404).json({ message: "Driver not found" });
        }

        const driverId = driverData[0][0].DriverID;
        console.log("Driver ID:", driverId, "Start time:", startTime);

        // Check if the driver has already started
        const [statusData] = await new Promise((resolve, reject) => {
          db.query(
            `SELECT buttonstatus FROM driver WHERE DriverID = ?`,
            [driverId],
            (error, results) => {
              if (error) return reject(error);
              resolve(results);
            }
          );
        });

        if (statusData.buttonstatus === "started") {
          return res.status(400).json({ message: "Start button has already been pressed." });
        }

        // Update start time and set status to "started"
        await new Promise((resolve, reject) => {
          db.query(
            `UPDATE driver 
             SET start_time = ?, buttonstatus = 'started'
             WHERE DriverID = ?;`,
            [startTime, driverId],
            (error, results) => {
              if (error) return reject(error);
              resolve(results);
            }
          );
        });

        res.status(200).json({
          message: "Start time recorded.",
        });
      } catch (error) {
        console.error("Database update error:", error);
        res.status(500).json({ message: "Database update failed" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("CORS or request error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
