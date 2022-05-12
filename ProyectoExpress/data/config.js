// Conectar una cadena de conexion
const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'api',
    port: '3309',
};

const pool = mysql.createPool(config);

module.exports = pool;
