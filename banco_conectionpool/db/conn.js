const mysql = require('mysql')


const pool = mysql.createPool({
    connectionLimit: 10, // número máximo de conexões simultâneas
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2',
  })
  
  module.exports = pool