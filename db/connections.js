const mysql = require('mysql2');

// Connect to Database

const connection = mysql.createConnection( 
    {
        host: 'localhost',
        user:'root',
        password: '2816Joanna',
        database: 'employees_db'
    },
    console.log(`Connected to the employee_db database.`)
);

connection.connect(function (err) {
    if (err) throw err;
  });

  module.exports = connection;