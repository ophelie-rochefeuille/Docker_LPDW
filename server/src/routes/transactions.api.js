const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const { Transactions } = require('../models/index');

router.get('/', (req, res, next) => {
    Transactions.findAll()
        .then((transactions) => {
            res.send(transactions);
            res.sendStatus(200).json(transactions);
        })
        .catch((err) => console.log(err));
});

router.get('/destroy', (req, res) => {
    Transactions.destroy()
        .then((transactions) => {
            console.log(transactions);
            res.sendStatus(200).json(transactions);
        })
        .catch((err) => console.log(err));
});

router.get('/create', (req, res) => {
    Transactions.create()
        .then((transactions) => {
            console.log(transactions);
            res.sendStatus(200).json(transactions);
        })
        .catch((err) => console.log(err));
});

router.get('/findById/:id', (req, res) => {
    const id = req.params.id;
    Entrepots.findById(id)
        .then((entrepots) => {
            console.log(entrepots);
            res.sendStatus(200).json(entrepots);
        })
        .catch((err) => console.log(err));
});
module.exports = router;
