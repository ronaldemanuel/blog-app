// Loading modules
const express = require('express')
const app = express()
const handlebars = requie('express-handlebars')
// const mongoose = require('mongoose')

//Config 
    // Body Parser
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.use('view engine', 'handlebars')
    // Mongoose
        //TODO

// Routes

// Start server
const PORT = 8000
const server = app.listen(PORT, () => {
    console.log("Server running on https://localhost:", server.address().port)
})