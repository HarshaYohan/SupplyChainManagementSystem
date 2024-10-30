import db from "../../../../backend/db.js";

export default async function handler(req, res) {
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
      const [driverData] = await db.query(`CALL GetDriverIDByEmail(?)`, [email]);
      if (driverData.length === 0) {
        return res.status(404).json({ message: "Driver not found" });
      }
      const driverId = driverData[0][0].DriverID;
      console.log("Driver ID:", driverId, "Start time:", startTime);

      // Check if the driver has already started
      const [[statusData]] = await db.query(
        `SELECT buttonstatus FROM driver WHERE DriverID = ?`,
        [driverId]
      );

      if (statusData.buttonstatus === "started") {
        return res.status(400).json({ message: "Start button has already been pressed." });
      }

      // Update start time and set status to "started"
      await db.query(
        `UPDATE driver 
         SET start_time = ?, buttonstatus = 'started'
         WHERE DriverID = ?;`,
        [startTime, driverId]
      );

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
}
