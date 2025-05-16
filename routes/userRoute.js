const { Router } = require('express');
const route = Router();

route.get('/', (req, res) => {
    res.render("index", { nome: "Daniel" });
})

route.get('/login', (req, res) => {
    res.render('login');
})

route.get('/registro', (req, res) => {
    res.render('registro');
})

route.post('/registro', (req, res) => {
    res.render('registro');
})

module.exports = route;