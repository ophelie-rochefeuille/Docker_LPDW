const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const { hashPassword } = require('../core/helpers');
const { Utilisateurs } = require('../models/index');

router.get('/', (req, res, next) => {
    Utilisateurs.findAll()
        .then((utilisateurs) => {
            res.send(utilisateurs);
            res.sendStatus(200).json(utilisateurs);
        })
        .catch((err) => console.log(err));
});

router.get('/destroy', (req, res) => {
    Utilisateurs.destroy()
        .then((utilisateurs) => {
            console.log(utilisateurs);
            res.sendStatus(200).json(utilisateurs);
        })
        .catch((err) => console.log(err));
});

router.get('/create', (req, res) => {
    Utilisateurs.create()
        .then((utilisateurs) => {
            console.log(utilisateurs);
            res.sendStatus(200).json(utilisateurs);
        })
        .catch((err) => console.log(err));
});

router.post('/login', async (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    try {
        const user = await Utilisateurs.findOne({ where: { login } });
        if (hashPassword(password, user.key) === user.password) {
            res.sendStatus(200).send(user);
        } else {
            res.sendStatus(403);
        }
    } catch (e) {
        res.sendStatus(500);
        console.error(e);
    }
});

router.post('/sign', async (req, res) => {
    const user = req.body.user;

    const { password, key } = hashPassword(user.password);
    user.password = password;
    user.key = key;

    if (!user.login || !user.firstName || !user.lastName || !user.password || !user.key) {
        res.sendStatus(403);
    } else {
        try {
            await Utilisateurs.create(user);
            res.sendStatus(200);
        } catch (e) {
            res.sendStatus(500);
            console.error(e);
        }
    }
});

module.exports = router;
