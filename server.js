const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const PORT = process.env.PORT || 7777 
// heroku - import
const path = require("path")
require("dotenv").config()

//middleware
app.use(express.json())
app.use(morgan('dev'))
// heroku -  middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

//routes
app.use('/portfolio', require('./routes/investment'))

//connect to db: crypto1
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crypto1', {useNewUrlParser: true}, () => {
    console.log('Connected to the db - crypto1/investments')
})

//global error handler
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})


// heroku - before your app.listen()
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})