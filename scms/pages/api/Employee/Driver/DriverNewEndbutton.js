import db from "../../../../backend/db.js";

export default async function handler(req, res) {
  const { email } = req.body;
  console.log(email);

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  console.log("Fetching driver ID for email:", email);

  if (req.method === "POST") {
    try {
      
    const [employeeRows] = await db.query(
     `CALL GetRoleByEmail(?)`,
      [email]
    );

    if (employeeRows.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const role = employeeRows[0][0].Roll;
    let driverRows;
    let driverId;

    if (role === "Driver") {
      const [driverData] = await db.query(
        `CALL GetDriverIDByEmail(?)`,
        [email]
      );
      driverRows = driverData; // Keep the query result for later use
    } else if (role === "DriverAssisant") {
      const [assistantData] = await db.query(
      `CALL GetAssistantIDByEmail(?)`,
        [email]
      );
      driverRows = assistantData; // Keep the query result for later use
    } else {
      return res.status(403).json({ message: "Access denied for this role" });
    }

    if (!driverRows || driverRows.length === 0) {
      return res.status(404).json({ message: "Driver not found" });
    }

    // Depending on the role, use the appropriate ID
    driverId = role === "Driver" ? driverRows[0][0].DriverID : driverRows[0][0].AssistantID;

    const [[statusData]] = await db.query(
        `SELECT buttonstatus FROM driver WHERE DriverID = ?`,
        [driverId]
      );

      if (statusData.buttonstatus === "ended") {
        return res.status(400).json({ message: "End button has already been pressed." });
      }
      // Update driver END_TIME
      await db.query(
        `CALL UpdateEndTime(?);
`,
        [driverId]
      );

      // Check the current update_count and perform the necessary update
      const [[currentCountData]] = await db.query(
        `SELECT update_count 
         FROM driver 
         WHERE DriverID = ?;`,
        [driverId]
      );

      const currentCount = currentCountData.update_count;
      console.log(currentCount);

      let TimeDifference;
      if (currentCount === 6) {
        await db.query(
          `CALL UpdateTimeDifference(?);
`,
          [driverId]
        );
        [[{ TimeDifference }]] = await db.query(
          `SELECT TimeDifference FROM Driver where driverID=?`,
          [driverId]
        );
        await db.query(
          `CALL ResetDriverFields(?);
`,
          [driverId]
        );
      } else {
        await db.query(
          `CALL UpdateDriverFields(?);
`,
          [driverId]
        );
        [[{ TimeDifference }]] = await db.query(
          `SELECT TimeDifference FROM Driver where driverID=?`,
          [driverId]
        );

        await db.query(`UPDATE driver SET buttonstatus = 'ended' WHERE DriverID = ?`, [driverId]);
      }
      console.log(TimeDifference);
      res.status(200).json({
        currentDate: currentCount,
        TimeDifference,
      });
    } catch (error) {
      console.error("Database update error:", error);
      res.status(500).json({ message: "Database update failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

