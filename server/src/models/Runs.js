const Sequelize = require('sequelize');
const db = require('../../config/database');

const Runs = db.define('Runs', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    run_id: {
        type: Sequelize.UUID,
        allowNull: false,
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
