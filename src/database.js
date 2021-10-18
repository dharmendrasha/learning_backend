
const config = require('./config')
const mysql = require('mysql')

const database = {
    host     : config.MYSQL_HOST,
    user     : config.MYSQL_USERNAME,
    password : config.MYSQL_PASSWORD,
    database : config.MYSQL_DATABASE,
    charset  : 'utf8',
    // port: config.MYSQL_PORT
}

console.log(database)

// const knex = require('knex')({
//     client: 'mysql',
//     connection: {...database}
//   })
// const bookshelf = require('bookshelf')(knex)
// module.exports = bookshelf

const con = mysql.createConnection({...database});

module.exports = con

