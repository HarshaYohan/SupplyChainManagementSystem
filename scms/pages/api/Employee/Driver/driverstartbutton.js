// pages/api/start.js
let startTime;

export default function handler(req, res) {
    if (req.method === 'POST') {
        startTime = new Date(); // Store current time as start time
        res.status(200).json({ message: "Start time recorded", startTime });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

export { startTime };
