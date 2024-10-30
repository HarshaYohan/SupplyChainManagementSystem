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
      // Step 1: Get role by email
      const employeeRows = await new Promise((resolve, reject) => {
        db.query(`CALL GetRoleByEmail(?)`, [email], (error, results) => {
          if (error) return reject(error);
          resolve(results);
        });
      });

      if (employeeRows[0].length === 0) {
        return res.status(404).json({ message: "Employee not found" });
      }

      const role = employeeRows[0][0].Role;
      let driverRows;
      let driverId;

      // Step 2: Get driver or assistant ID by role
      if (role === "Driver") {
        driverRows = await new Promise((resolve, reject) => {
          db.query(`CALL GetDriverIDByEmail(?)`, [email], (error, results) => {
            if (error) return reject(error);
            resolve(results);
          });
        });
      } else if (role === "DriverAssisant") {
        driverRows = await new Promise((resolve, reject) => {
          db.query(`CALL GetAssistantIDByEmail(?)`, [email], (error, results) => {
            if (error) return reject(error);
            resolve(results);
          });
        });
      } else {
        return res.status(403).json({ message: "Access denied for this role" });
      }

      if (!driverRows[0] || driverRows[0].length === 0) {
        return res.status(404).json({ message: "Driver not found" });
      }

      driverId = role === "Driver" ? driverRows[0][0].DriverID : driverRows[0][0].AssistantID;

      // Step 3: Check button status
      const [statusData] = await new Promise((resolve, reject) => {
        db.query(`SELECT buttonstatus FROM driver WHERE DriverID = ?`, [driverId], (error, results) => {
          if (error) return reject(error);
          resolve(results);
        });
      });

      if (statusData.buttonstatus === "ended") {
        return res.status(400).json({ message: "End button has already been pressed." });
      }

      // Step 4: Update end time
      await new Promise((resolve, reject) => {
        db.query(`CALL UpdateEndTime(?)`, [driverId], (error) => {
          if (error) return reject(error);
          resolve();
        });
      });

      // Step 5: Check and update driver fields
      const [currentCountData] = await new Promise((resolve, reject) => {
        db.query(`SELECT update_count FROM driver WHERE DriverID = ?`, [driverId], (error, results) => {
          if (error) return reject(error);
          resolve(results);
        });
      });

      const currentCount = currentCountData.update_count;
      console.log(currentCount);

      let TimeDifference;

      if (currentCount === 6) {//change this to make the weekly update
        await new Promise((resolve, reject) => {
          db.query(`CALL UpdateTimeDifference(?)`, [driverId], (error) => {
            if (error) return reject(error);
            resolve();
          });
        });

        [{ TimeDifference }] = await new Promise((resolve, reject) => {
          db.query(`SELECT TimeDifference FROM Driver WHERE DriverID = ?`, [driverId], (error, results) => {
            if (error) return reject(error);
            resolve(results);
          });
        });

        await new Promise((resolve, reject) => {
          db.query(`CALL ResetDriverFields(?)`, [driverId], (error) => {
            if (error) return reject(error);
            resolve();
          });
        });
      } else {
        await new Promise((resolve, reject) => {
          db.query(`CALL UpdateDriverFields(?)`, [driverId], (error) => {
            if (error) return reject(error);
            resolve();
          });
        });

        [{ TimeDifference }] = await new Promise((resolve, reject) => {
          db.query(`SELECT TimeDifference FROM Driver WHERE DriverID = ?`, [driverId], (error, results) => {
            if (error) return reject(error);
            resolve(results);
          });
        });
      }

      await new Promise((resolve, reject) => {
        db.query(`UPDATE driver SET buttonstatus = 'ended' WHERE DriverID = ?`, [driverId], (error) => {
          if (error) return reject(error);
          resolve();
        });
      });

      console.log(TimeDifference);

      res.status(200).json({
        currentDate: currentCount,
        TimeDifference,
      });
    } catch (error) {
      console.error("Database update error:", error);
      res.status(500).json({ message: "Database update failed", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
