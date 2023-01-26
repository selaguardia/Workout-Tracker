const express = require('express')

const app = express()
const port = 4000;

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my app'})
})

app.listen(port,(res,req) => {
    console.log(`✅ Listening for client requests on Port ${port} ✅`)
})