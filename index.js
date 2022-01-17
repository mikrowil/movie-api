require('dotenv').config()
const express = require('express')
const movieRoutes = require('./src/routes/movieRoutes')

const app = express()

const PORT = process.env.PORT

app.use(movieRoutes)

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})
