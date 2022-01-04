const Sequelize = require('sequelize');
const db = require('../../config/database');

const Transactions = db.define('Transactions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    poulet: {
        type: Sequelize.INTEGER,
    },
    type: {
        type: Sequelize.STRING(7),
    },
    date: {
        type: Sequelize.DATE,
    },
});

module.exports = Transactions;
