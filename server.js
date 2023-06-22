const express = require('express');

const inquirer = require('inquirer');

const mysql = require('mysql2');
const path = require('path');

const consoleTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Check if should be true or false

// Connect to database
const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '1422',
      database: 'resource_db' 
    },
    console.log(`Connected to the resource_db database.`)
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
  