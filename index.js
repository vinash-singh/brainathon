// Import the Express library
const express = require('express');

const mysql = require('mysql');
  

// Create an instance of the Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World! This is my first API using Express.');
});

// Start the server on port 3000
app.listen(3000, () => {
    const connection = getConnection();
  console.log('Server is running on http://localhost:3000');
});


function getConnection ()
{
  const options = 
  {  
    
    host: "35.200.239.13", //IP address of my Cloud SQL Server
    user: 'root',
    password: 'brainycrusader',
    database: 'brainycrusader'
  };
  return mysql.createConnection(options);
}