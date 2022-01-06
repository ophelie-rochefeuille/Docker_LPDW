const Sequelize = require('sequelize');
const db = require('../../config/database');

const Users = db.define('Users', {
    login: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.TEXT,
    },
    key: {
        type: Sequelize.TEXT,
    },
});

module.exports = Users;
