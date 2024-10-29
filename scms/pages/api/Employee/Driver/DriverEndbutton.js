// pages/api/end.js
import { startTime } from './driverstartbutton.js';
import db from "../../../../backend/db.js";

export default async function handler(req, res) {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    console.log("Fetching driver ID for email:", email);

    if (req.method === 'POST') {
        if (!startTime) {
            return res.status(400).json({ message: "Start time not set" });
        }

        const endTime = new Date();
        const durationMs = endTime - startTime;

        const hours = Math.floor((durationMs / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((durationMs / (1000 * 60)) % 60);
        const seconds = Math.floor((durationMs / 1000) % 60);

        const duration = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        try {
            const [driverData] = await db.query(`CALL GetDriverIDByEmail(?)`, [email]);
            if (driverData.length === 0) {
                return res.status(404).json({ message: "Driver not found" });
            }
            const driverId = driverData[0][0].DriverID;

            // Update driver weekly hours
            await db.query(`CALL UpdateDriverWeeklyHour(?, ?)`, [driverId, duration]);

            // Fetch update_count and WeeklyWorkHours
            const [rows] = await db.query(`SELECT update_count, WeeklyWorkHours FROM driver WHERE id = ?`, [driverId]);
            const { update_count, WeeklyWorkHours } = rows[0];

            // Handle storing weekly hours after 7 updates
            if (update_count === 0) {
                const currentData = JSON.parse(WeeklyWorkHours || "{}");
                const weekNumber = Object.keys(currentData).length + 1;
                currentData[`week ${String(weekNumber).padStart(2, '0')}`] = duration;

                await db.query(`UPDATE driver SET WeeklyWorkHours = ? WHERE id = ?`, [JSON.stringify(currentData), driverId]);
            }

            res.status(200).json({
                message: "End time recorded and driver weekly hours updated",
                duration: { hours, minutes, seconds },
            });
        } catch (error) {
            console.error("Database update error:", error);
            res.status(500).json({ message: "Database update failed" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
