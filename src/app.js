const express = require('express')

const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const indexRoutes = require('./routes/indexRoutes')
const patientRoutes = require('./routes/patientRoutes')

app.use('/', indexRoutes)
app.use('/patient', patientRoutes)


module.exports = app