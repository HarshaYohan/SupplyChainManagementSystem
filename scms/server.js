const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// Initialize express app
const app = express();
const port = 3001;

// Middleware to handle CORS and JSON requests
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dulakshi@2002',  // Update with your MySQL password
    database: 'supplychainmanagement'   // Update with your database name
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

// Example API route to test the connection
app.get('/api/test', (req, res) => {
    res.send('API is working!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
