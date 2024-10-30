import db from "../../../../backend/db.js";

export default async function handler(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    console.log("Fetching driver ID for email:", email);

    // Step 1: Fetch the role of the employee by email
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

    // Step 2: Fetch driver or assistant ID based on role
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
    console.log("Driver ID found:", driverId);

    // Step 3: Fetch orders assigned to the driver
    const orderRows = await new Promise((resolve, reject) => {
      db.query(`CALL GetDeliveredDataByDriverID(?)`, [driverId], (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });

    if (!orderRows[0] || orderRows[0].length === 0) {
      return res.status(404).json({ message: "No orders found for this driver" });
    }

    res.status(200).json(orderRows[0]);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
}
