import mysql from "mysql2";

let db;
db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#2024mySQLdatabase",
  database: "supplychainmanagementsystem",
  port: 3307,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

export default db;
