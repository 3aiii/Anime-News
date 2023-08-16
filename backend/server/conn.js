const mysql2 = require('mysql2')

const conn = mysql2.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "news-anime"
})

module.exports = conn