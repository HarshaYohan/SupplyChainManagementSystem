import db from "../../../../backend/db.js";
import runCors from "../../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    // Ensure CORS is run on each request
    await runCors(req, res);

    const { email } = req.body;
    console.log("Fetching role for email:", email);

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Step 1: Get the role by email
    const employeeRows = await new Promise((resolve, reject) => {
      db.query(`CALL GetRoleByEmail(?)`, [email], (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });

    if (!employeeRows[0] || employeeRows[0].length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const role = employeeRows[0][0].Role;
    let driverId;

    // Step 2: Get driver or assistant ID based on role
    if (role === "Driver") {
      const driverData = await new Promise((resolve, reject) => {
        db.query(`CALL GetDriverIDByEmail(?)`, [email], (error, results) => {
          if (error) return reject(error);
          resolve(results);
        });
      });

      if (!driverData[0] || driverData[0].length === 0) {
        return res.status(404).json({ message: "Driver not found" });
      }
      driverId = driverData[0][0].DriverID;

    } else if (role === "DriverAssistant") {
      const assistantData = await new Promise((resolve, reject) => {
        db.query(`CALL GetAssistantIDByEmail(?)`, [email], (error, results) => {
          if (error) return reject(error);
          resolve(results);
        });
      });

      if (!assistantData[0] || assistantData[0].length === 0) {
        return res.status(404).json({ message: "Driver Assistant not found" });
      }
      driverId = assistantData[0][0].AssistantID;

    } else {
      return res.status(403).json({ message: "Access denied for this role" });
    }

    console.log("Driver ID found:", driverId);

    // Step 3: Fetch orders associated with the driver or assistant
    const orderRows = await new Promise((resolve, reject) => {
      db.query(`CALL GetOrdersByDriverID(?)`, [driverId], (error, results) => {
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
