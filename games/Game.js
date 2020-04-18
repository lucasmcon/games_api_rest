const Sequelize = require("sequelize");
const connection = require("../database/database");

const Game = connection.define('cad_tb_games',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

//Game.sync({force: true});

module.exports = Game;