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
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'gasdb',
})


// Route to register user
app.post('/register', (req, res) => {
  // Get variables sent from form
  const sentEmail = req.body.Email
  const sentUserName = req.body.UserName
  const sentPassword = req.body.Password

  // Insert new user into users database
  const SQL = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)'
  const Values = [sentEmail, sentUserName, sentPassword]
  // Execute SQL statement
  db.query(SQL, Values, (err, results)=>{
    if(err){
      res.send(err)
    }
    else{
      console.log('User inserted successfully!')
      res.send({message: 'User added!'})
      // 
    }
  })
})

// Route to log user in 
app.post('/login', (req, res) => {
  
})
