require('dotenv').config();
const express = require("express");

const connection = require("./config/config");

const app = express();
const port = process.env.PORT;
connection;

app.get('/', (req, res) => {
    res.send("Boa noite daniel!!!");
})

app.listen(port, () => {
    console.log("Aplicação rodando na porta 3000")
})