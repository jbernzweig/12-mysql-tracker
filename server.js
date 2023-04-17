const express = require('express');

const mysql = require('mysql2');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3001;

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Check if should be true or false

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '1422',
      database: 'tbd_db' // To be Renamed
    },
    console.log(`Connected to the tbd_db database.`)
  );
  
  // Query database
//   db.query('SELECT * FROM students', function (err, results) {
//     console.log(results);
//   });
  
  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  