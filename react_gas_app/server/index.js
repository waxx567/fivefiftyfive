// Dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

// Run server
app.listen(3002, () => {
  console.log('Server is running on port 3002')
})
