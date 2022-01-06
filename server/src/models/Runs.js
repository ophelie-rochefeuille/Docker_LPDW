const Sequelize = require('sequelize');
const db = require('../../config/database');

const Runs = db.define('Runs', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
    },
    temperature: {
        type: Sequelize.INTEGER,
    },
    longitude: {
        type: Sequelize.INTEGER,
    },
    latitude: {
        type: Sequelize.INTEGER,
    },
    date: {
        type: Sequelize.DATE,
    },
});

module.exports = Runs;
