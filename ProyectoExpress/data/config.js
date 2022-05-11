// Conectar una cadena de conexion
const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'ap1',
};

const pool = mysql.createPool(config);

module.exports = pool;
