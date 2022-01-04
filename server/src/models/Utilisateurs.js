const Sequelize = require('sequelize');
const db = require('../../config/database');

const Utilisateurs = db.define('Utilisateurs', {
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

module.exports = Utilisateurs;
