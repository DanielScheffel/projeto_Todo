require('dotenv').config();
const express = require("express");
const path = require('path');

const connection = require("./config/config");
const userRoute = require("./routes/userRoute")

const app = express();
const port = process.env.PORT;
connection;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.static('public'))

app.use('/', userRoute);
app.use('/login', userRoute);
app.use('/registro', userRoute);

app.listen(port, () => {
    console.log("Aplicação rodando na porta 3000")
})