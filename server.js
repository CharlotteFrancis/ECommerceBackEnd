require('dotenv').config()

const { join } = require('path')
const express = require('express')
// import sequelize connection

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
app.listen(process.env.PORT || 3000)
// require('./config/connection.js')
//   .sync()
//   .then(() => app.listen(process.env.PORT || 3000))
//   .catch(err => console.log(err))
