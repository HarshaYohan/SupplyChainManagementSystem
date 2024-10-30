import mysql from 'mysql2'; 

let db;
db = mysql.createConnection({

  host: process.env.DATABASE_HOST,
  user:  process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

export default db;