// Dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// Run server
app.listen(3002, () => {
  console.log('Server is running on port 3002')
})

// Create MySQL database
const db = mysql.createConnection({
  user: 'u987995554_waxx',
  host: 'localhost',
  password: 'adm1N@gas',
  database: 'u987995554_gasdb'
})


// Route to register user
app.post('/register', (req, res) => {
  // Get variables sent from form
  const sentEmail = req.body.Email
  const sentUserName = req.body.UserName
  const sentPassword = req.body.Password

  // Insert new user into users database
  const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'
  const Values = [sentEmail, sentUserName, sentPassword]

  // Execute SQL statement
  db.query(SQL, Values, (err, results) => {
    if(err) {
      res.send(err)
    }
    else {
      console.log('User inserted successfully!')
      res.send({message: 'User added!'})
    }
  })
})


// Route to log user in 
app.post('/login', (req, res) => {
  // Get variables sent from form
  const sentLoginUserName = req.body.LoginUserName
  const sentLoginPassword = req.body.LoginPassword

  // Insert new user into users database
  const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'
  const Values = [sentLoginUserName, sentLoginPassword]

  // Execute SQL statement
  db.query(SQL, Values, (err, results) => {
    var len = results.length

    if(err) {
      res.send({error: err})
    }
    if(len > 0) {
      res.send(results)
    }
    else {
      res.send({message: 'Credentials do not match!'})
    }
  })
})
