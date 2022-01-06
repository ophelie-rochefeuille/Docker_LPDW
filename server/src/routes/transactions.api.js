const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const { uuidv4 } = require('../core/helpers');
const { Transactions } = require('../models/index');

router.post('/submit', async (req, res) => {
    if (req.body) {
        const transaction = req.body;
        transaction.id = uuidv4();
        if (transaction.type === 'start') {
            transaction.run_id = uuidv4();
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
