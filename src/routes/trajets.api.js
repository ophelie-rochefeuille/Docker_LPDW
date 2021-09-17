const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Trajets} = require('../models');

router.get('/', (req, res, next) => {
  Trajets.findAll()
    .then(trajets => {
      console.log(trajets)
      res.sendStatus(200).json(trajets);
    })
    .catch(err => console.log(err))
})

router.get('/destroy', (req, res) => {
  Trajets.destroy()
    .then(trajets => {
      console.log(trajets)
      res.sendStatus(200).json(trajets);
    })
    .catch(err => console.log(err))
})

router.get('/create', (req, res) => {
  Trajets.create()
    .then(trajets => {
      console.log(trajets)
      res.sendStatus(200).json(trajets);
    })
    .catch(err => console.log(err))
})

module.exports = router 