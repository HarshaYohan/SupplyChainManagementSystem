import db from "../../../backend/db.js";
import runCors from "../../../utils/cors.js";

export default async function handler(req, res) {
  try {
    await runCors(req, res); // Apply CORS
  } catch (error) {
    console.error("CORS error:", error);
    return res.status(500).json({ error: "CORS failed" });
  }

  if (req.method === "POST") {
    const { date } = req.body;

    const getAssistantsQuery = `
      SELECT da.AssistantID, e.Name
      FROM driverassistant da
      JOIN employee e ON da.EmployeeID = e.EmployeeID
      WHERE NOT EXISTS (
        SELECT 1 
        FROM truckschedule ts 
        WHERE ts.AssistantID = da.AssistantID 
          AND ts.ScheduleDate = ?
      ) AND da.WeeklyWorkHours < 60
    `;

    db.query(getAssistantsQuery, [date], (err, results) => {
      if (err) {
        console.error("Error fetching assistant details:", err);
        return res.status(500).json({ error: "Failed to fetch assistant details" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "No assistants available" });
      }

      const assistants = results.map((assistant) => ({
        AssistantID: assistant.AssistantID,
        EmployeeName: assistant.Name,
        TotalHours: assistant.totalHours,
      }));
      console.log("assistants", assistants);
      res.json({ assistants });
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
