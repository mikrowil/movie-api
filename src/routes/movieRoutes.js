const express = require('express')
const MovieService = require('../services/MovieService');

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('API running')
})

routes.get('/movies', async (req, res) => {

    const result = await MovieService.getMovies()

    res.send(result)
})

module.exports = routes
