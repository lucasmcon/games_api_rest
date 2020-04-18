const Sequelize =  require("sequelize");
const connection = new Sequelize('games', 'root', 'Qwaszx123*', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;