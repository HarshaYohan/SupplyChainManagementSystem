import db from "../../../../backend/db.js";

export default async function handler(req, res) {
  try {
    // Directly use req.body as it's already parsed by Next.js
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    console.log("Fetching driver ID for email:", email);

    const [emplyoeeRows] = await db.query(
      `SELECT Roll FROM employee 
        Where email=?`,
      [email]
    );
    console.log(emplyoeeRows[0]);
    if (emplyoeeRows.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const role = emplyoeeRows[0].Roll;
    var orderRows;
    if (role == "Driver") {
      // Step 1: Fetch the driverId using the provided email

      const [driverRows] = await db.query(
        `
      SELECT d.DriverID 
      FROM Employee e
      JOIN Driver d ON d.EmployeeID = e.EmployeeID
      WHERE e.Email = ?
    `,
        [email]
      );

      if (driverRows.length === 0) {
        return res.status(404).json({ message: "Driver not found" });
      }

      const driverId = driverRows[0].DriverID;
      console.log("Driver ID found:", driverId);

      // Step 2: Fetch orders assigned to the driver
      [orderRows] = await db.query(
        `
      SELECT 
        CustomerName,
        PhoneNumber,
        OrderID,
        DeliveryAddress,
        City,
        DeliveryDate,
        RouteDescription,
        TruckNumber,
        CurrentStatus
      FROM DeliveredData
      WHERE DriverID = ?
    `,
        [driverId]
      );
    }

    if (orderRows.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this driver" });
    }

    res.status(200).json(orderRows);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
