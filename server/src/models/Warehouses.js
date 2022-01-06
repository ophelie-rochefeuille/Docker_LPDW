const Sequelize = require('sequelize');
const db = require('../../config/database');

const Warehouses = db.define('Warehouses', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
    },
});

module.exports = Warehouses;
