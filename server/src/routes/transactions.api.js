const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const { uuid } = require('uuidv4');
const { Transactions } = require('../models/index');

router.post('/submit', async (req, res) => {
    if (req.body) {
        const transaction = req.body;
        transaction.id = uuid();
        if (transaction.type === 'start') {
            transaction.run_id = uuid();
        }
        try {
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
