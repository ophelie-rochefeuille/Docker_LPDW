const Sequelize = require('sequelize');

module.exports = new Sequelize('app_db', 'user', 'password', {
    host: 'db',
    dialect: 'mysql',
    operatorsAliases: 0,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
