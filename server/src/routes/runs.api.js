const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const { Runs } = require('../models/index');

router.get('/', async (req, res) => {
    try {
        const runs = await Runs.findAll();
        res.status(200).send(runs);
    } catch (e) {
        res.sendStatus(500);
        console.error(e);
    }
});

module.exports = router;
