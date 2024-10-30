// import db from "../../../../backend/db.js";

// export default async function handler(req, res) {
//   /*try {
//     const { email } = req.body;
//     console.log("Fetching orders...");
//     const [rows] = await db.query(`
//       SELECT
//         o.OrderID AS id,
//         c.CustomerName AS customerName,
//         o.DeliveryAddress AS address,
//         c.PhoneNumber AS phoneNumber,
//         o.DeliveryDate,
//         o.CurrentStatus AS status
//       FROM
//         Orders o
//       JOIN
//         Customer c ON o.CustomerID = c.CustomerID

//     `, [email]);

//     res.status(200).json(rows);  // Send the fetched rows as a JSON response
//   } catch (error) {
//     console.error("Error fetching orders:", error);  // Log the error for debugging
//     res.status(500).json({ message: "Error fetching orders", error });
//   }*/

//     try {
//         const { email } = req.body;

//         console.log("Fetching driver ID for email:", email);

//         // Fetch the driverId using the provided email
//         const [driverRows] = await db.query(`
//             SELECT d.DriverID
//             FROM Employee e
//             JOIN  Driver d  ON d.EmployeeId=e.EmployeeID
//             WHERE Email = ?`,
//             [email]
//         );

//         if (driverRows.length === 0) {
//             return res.status(404).json({ message: "Driver not found" });
//         }

//         const driverId = driverRows[0].DriverID;

//         console.log("Driver ID found:", driverId);
//         console.log("Fetching orders assigned to the driver...");

//         // Fetch orders assigned to the driver where CurrentStatus is 'Out for the Final Order'
//         const [orderRows] = await db.query(`
//           SELECT
//     CustomerName,
//     PhoneNumber,
//     OrderID,
//     DeliveryAddress,
//     City,
//     RouteDescription,
//     TruckNumber,
//     CurrentStatus,
//     DeliveryDate
//     FROM
//       finalorderdetails
// WHERE

//      DriverID = ?

//       `, [driverId]);

//         if (orderRows.length === 0) {
//             return res.status(404).json({ message: "No orders found for this driver" });
//         }

//         res.status(200).json(orderRows);

//     } catch (error) {
//         console.error("Error fetching orders:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }

// }
import db from "../../../../backend/db.js";
import runCors from "../../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    const { email } = req.body;

    console.log("Fetching role for email:", email);

    // Get the role of the employee based on their email
    const [employeeRows] = await db.query(
      `CALL GetRoleByEmail(?)`,
      [email]
    );

    if (employeeRows.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const role = employeeRows[0][0].Roll;
    let driverId;

    // Determine whether the role is "Driver" or "DriverAssistant"
    if (role === "Driver") {
      const [driverData] = await db.query(
       `CALL GetDriverIDByEmail(?)`,
        [email]
      );
      if (driverData.length === 0) {
        return res.status(404).json({ message: "Driver not found" });
      }
      driverId = driverData[0][0].DriverID;
    } else if (role === "DriverAssistant") {
      const [assistantData] = await db.query(
    `CALL GetAssistantIDByEmail(?)`,
        [email]
      );
      if (assistantData.length === 0) {
        return res.status(404).json({ message: "Driver Assistant not found" });
      }
      driverId = assistantData[0][0].AssistantID;
    } else {
      return res.status(403).json({ message: "Access denied for this role" });
    }

    console.log("Driver ID found:", driverId);

    // Fetch orders associated with the driver or driver assistant
    const [orderRows] = await db.query(
      `CALL GetOrdersByDriverID(?)`,
      [driverId]
    );


    if (orderRows.length === 0) {
      return res.status(404).json({ message: "No orders found for this driver" });
    }


    res.status(200).json(orderRows[0]);

  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
