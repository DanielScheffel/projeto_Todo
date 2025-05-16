const connection = require('../config/config');

class userModel {
    
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    async createUser() {
        const sql = "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)";
        const [result] = await connection.execute(sql, [this.nome, this.email, this.senha]);
        return result
    }

}