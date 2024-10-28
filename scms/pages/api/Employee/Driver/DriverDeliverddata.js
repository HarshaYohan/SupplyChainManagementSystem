import db from "../../../../backend/db.js";

export default async function handler(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    console.log("Fetching driver ID for email:", email);

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
    console.log("Driver ID found:", driverId);

    // Step 2: Fetch orders assigned to the driver
    const [orderRows] = await db.query(
     `CALL GetDeliveredDataByDriverID(?)`,
      [driverId]
    );

    if (!orderRows || orderRows.length === 0) {
      return res.status(404).json({ message: "No orders found for this driver" });
    }

    res.status(200).json(orderRows[0]);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
