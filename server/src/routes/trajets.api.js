const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const { Trajets } = require('../models/index');

router.get('/', (req, res, next) => {
    Trajets.findAll()
        .then((trajets) => {
            res.send(trajets);
            res.sendStatus(200).json(trajets);
        })
        .catch((err) => console.log(err));
});

router.get('/destroy', (req, res) => {
    Trajets.destroy()
        .then((trajets) => {
            console.log(trajets);
            res.sendStatus(200).json(trajets);
        })
        .catch((err) => console.log(err));
});

router.get('/create', (req, res) => {
    Trajets.create()
        .then((trajets) => {
            console.log(trajets);
            res.sendStatus(200).json(trajets);
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
