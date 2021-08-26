const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const db = require('./db')
// const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

// TODO: Configure Routes
// app.use('/api', AppRouter)

// TODO: Write db/index.js
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Server Running On Port:`, PORT))
