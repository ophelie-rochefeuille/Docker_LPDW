const express = require('express');
const router = express.Router();

const { hashPassword } = require('../core/helpers');
const { Users } = require('../models/index');

router.get('/', async (req, res) => {
    try {
        const users = await Users.findAll();
        res.send(users);
    } catch (e) {
        res.sendStatus(500);
    }
});

router.post('/login', async (req, res) => {
    if (req.body) {
        const login = req.body.login;
        const password = req.body.password;
        try {
            const user = await Users.findOne({ where: { login } });
            if (hashPassword(password, user.key).password === user.password) {
                res.sendStatus(200);
            } else {
                res.sendStatus(403);
            }
        } catch (e) {
            res.sendStatus(500);
            console.error(e);
        }
    } else {
        res.sendStatus(404);
    }
});

router.post('/sign', async (req, res) => {
    if (req.body) {
        const user = req.body.user;
        const userTaken = await Users.findOne({ where: { login: user.login } });

        const { password, key } = hashPassword(user.password);
        user.password = password;
        user.key = key;

        if (!user.login || !user.firstName || !user.lastName || !user.password || !user.key) {
            res.sendStatus(403);
        } else if (userTaken) {
            res.sendStatus(409);
        } else {
            try {
                await Users.create(user);
                res.sendStatus(200);
            } catch (e) {
                res.sendStatus(500);
                console.error(e);
            }
        }
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
