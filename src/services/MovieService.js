const pool = require('../middleware/dbMiddleware')

const GET_ALL_MOVIES = 'SELECT * FROM movies;'


class MovieService{
    constructor() {
    }

    static async getMovies(){
        return await pool.query(GET_ALL_MOVIES)
    }


}

module.exports = MovieService
