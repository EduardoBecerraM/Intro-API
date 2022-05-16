const mysql = require('mssql');

//Credenciales de conection a base de datos
const config = {
    server:'WINSERVEREDUARD',
    user:'eduardoserver',
    password:'Qwerty123',
    database:'api',
    options: {
        "enableArithAbort": true,
        "encrypt": false,
    },
};

module.exports = config;
