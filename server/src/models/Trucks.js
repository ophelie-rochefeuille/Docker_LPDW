const Sequelize = require('sequelize');
const db = require('../../config/database');

const Trucks = db.define('Trucks', {
    plate: {
        type: Sequelize.STRING(9),
        primaryKey: true,
    },
});

module.exports = Trucks;
