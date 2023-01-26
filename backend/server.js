const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my app'})
})

app.listen(port,() => {
    console.log(`✅ Listening for client requests on Port: ${port} ✅`)
})