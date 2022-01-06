const Sequelize = require('sequelize');
const db = require('../../config/database');

const Cities = db.define('Cities', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
});

module.exports = Cities;
