const mysql = require('mysql2');


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '1422',
      database: 'resource_db' 
    },
    console.log(`Connected to the resource_db database.`)
  );

db.connect(function(err){
    if (err) throw err
})

module.exports = db;