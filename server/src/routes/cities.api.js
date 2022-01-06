const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const { Cities } = require('../models/index');

router.get('/', async (req, res) => {
    try {
        const cities = await Cities.findAll();
        res.status(200).send(cities);
    } catch (e) {
        res.sendStatus(500);
        console.error(e);
    }
});

router.post('/create', async (req, res) => {
    if (req.body) {
        const city = req.body;
        try {
            await Cities.create(city);
            res.sendStatus(200);
        } catch (e) {
            res.sendStatus(500);
            console.error(e);
        }
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
