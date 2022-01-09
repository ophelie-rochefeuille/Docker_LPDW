const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const { Trucks } = require('../models/index');

router.get('/', async (req, res) => {
    try {
        const trucks = await Trucks.findAll();
        res.status(200).send(trucks);
    } catch (e) {
        res.sendStatus(500);
        console.error(e);
    }
});

router.post('/create', async (req, res) => {
    if (req.body) {
        const truck = req.body;
        try {
            await Trucks.create(truck);
            res.sendStatus(201);
        } catch (e) {
            res.sendStatus(500);
            console.error(e);
        }
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;
