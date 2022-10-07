const express = require('express')
require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 8000
const connectDB = require('./config/db')

//connect to DB
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes
app.use('/users', require('./routes/userRoutes'))

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})