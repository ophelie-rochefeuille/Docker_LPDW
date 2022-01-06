const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const { uuid } = require('uuidv4');
const { Transactions, Runs } = require('../models/index');

router.get('/', async (req, res) => {
    try {
        const transactions = await Transactions.findAll();
        res.status(200).send(transactions);
    } catch (e) {
        res.sendStatus(500);
        console.error(e);
    }
});

router.post('/submit', async (req, res) => {
    if (req.body) {
        const transaction = req.body;
        transaction.id = uuid();
        console.log(transaction);
        try {
            if (transaction.type === 'start') {
                transaction.run_id = uuid();
                await Runs.create({
                    id: transaction.run_id,
                    temperature: 0,
                    longitude: 0,
                    latitude: 0,
                    date: transaction.date,
                });
            }
            await Transactions.create(transaction);
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
