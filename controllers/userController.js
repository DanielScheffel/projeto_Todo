const userModel = require('../models/UserModel');

const userController = {

    async createUser(req, res) {
        try {
            const { nome, email, senha } = req.body;


            const user = new userModel(nome, email, senha);
            await user.createUser();
        } catch (error) {
            console.log(error);
            res.status(500).send("Erro interno do servidor")
        }
    }

}

module.exports = userController;