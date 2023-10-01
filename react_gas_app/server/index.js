// Dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

// Run server
app.listen(3002, () => {
  console.log('Server is running on port 3002')
})

// MySQL database
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'gasdb',
})


// Route to server that registers user
app.post('/register', (req, res) => {
  // Get variables sent from form
})
