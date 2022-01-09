const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const { Warehouses } = require('../models/index');

router.get('/', async (req, res) => {
    try {
        const warehouses = await Warehouses.findAll();
        res.status(200).send(warehouses);
    } catch (e) {
        res.sendStatus(500);
        console.error(e);
    }
});

router.post('/create', async (req, res) => {
    if (req.body) {
        const warehouse = req.body;
        try {
            await Warehouses.create(warehouse);
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
