require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// This is a test comment jee

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const workordersRouter = require('./routes/workorders')
app.use('/workorders', workordersRouter)

const itemsRouter = require('./routes/items')
app.use('/items', itemsRouter)

const port = process.env.PORT || 3005
app.listen(port, () => console.log('server started'))
