const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')


const app= express()
app.use(cors())
app.use (express.json)

const MONGO_URI = ' mongodb+srv://<credentials>@gasup.fr3sfhi.mongodb.net/?appName=mongosh+2.2.6'

mongoose.connect (MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true})

const User= require ('./models/User.js')
const FuelLog = require ('./models/FuelLog.js')

//routers
app.get('/', (req, res) => {
res.status(200).sendFile(index.html)
})


app.post('/api.fuellog')