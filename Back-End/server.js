const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017').then(r => {
  console.log('database not found')
})
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(`/`,require('./routes/index.route'));


const port = 8022 || process.env.PORT


app.listen(port, () => {
  console.log('Connected to port ' + port)
})
