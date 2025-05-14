require('dotenv').config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
})

connection.connect((err) => {
    if(err) {
        console.log('Erro ao conectar com o banco', err)
        return
    }

    console.log('Conectado com o banco de dados')
})

module.exports = connection;