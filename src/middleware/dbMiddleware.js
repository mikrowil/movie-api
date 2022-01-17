const mysql = require("mysql");
const util = require("util");
const pool = mysql.createPool({
    connectionLimit: process.env.CONNECTION_LIMIT,
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE

})

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Connection to the database was closed')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Too many connections, try again later')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Connection was refused')
        }
    }
    if (connection) {
        connection.release()
    }

})

pool.query = util.promisify(pool.query)

module.exports = pool
