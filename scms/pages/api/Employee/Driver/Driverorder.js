import db from "../../../../backend/db.js";

export default async function handler(req, res) {
  /*try {
    const { email } = req.body;
    console.log("Fetching orders...");
    const [rows] = await db.query(`
      SELECT 
        o.OrderID AS id,
        c.CustomerName AS customerName,
        o.DeliveryAddress AS address,
        c.PhoneNumber AS phoneNumber,
        o.DeliveryDate,
        o.CurrentStatus AS status
      FROM 
        Orders o
      JOIN 
        Customer c ON o.CustomerID = c.CustomerID

    `, [email]);

    res.status(200).json(rows);  // Send the fetched rows as a JSON response
  } catch (error) {
    console.error("Error fetching orders:", error);  // Log the error for debugging
    res.status(500).json({ message: "Error fetching orders", error });
  }*/

    try {
        const { email } = req.body;

        console.log("Fetching driver ID for email:", email);
    
        // Fetch the driverId using the provided email
        const [driverRows] = await db.query(`
            SELECT d.DriverID 
            FROM Employee e
            JOIN  Driver d  ON d.EmployeeId=e.EmployeeID
            WHERE Email = ?`, 
            [email]
        );
    
        if (driverRows.length === 0) {
            return res.status(404).json({ message: "Driver not found" });
        }
    
        const driverId = driverRows[0].DriverID;
    
        console.log("Driver ID found:", driverId);
        console.log("Fetching orders assigned to the driver...");
    
        // Fetch orders assigned to the driver where CurrentStatus is 'Out for the Final Order'
        const [orderRows] = await db.query(`
          SELECT 
    CustomerName,
    PhoneNumber,
    OrderID,
    DeliveryAddress,
    City,
    RouteDescription,
    TruckNumber,
    CurrentStatus

    FROM
      finalorderdetails
WHERE 
    
     DriverID = ?

      `, [driverId]);
      
    
        if (orderRows.length === 0) {
            return res.status(404).json({ message: "No orders found for this driver" });
        }
    
        res.status(200).json(orderRows);
    
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Internal server error" });
    }
    
}
