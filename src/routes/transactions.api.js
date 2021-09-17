const express = require('express');
const router = express.Router();

const db = require('../../config/databases');
const {Transactions} = require('../models');

router.get('/', (req, res, next) => {
  Transactions.findAll()
    .then(transactions => {
      console.log(transactions)
      res.sendStatus(200).json(transactions);
    })
    .catch(err => console.log(err))
})

router.get('/destroy', (req, res) => {
  Transactions.destroy()
    .then(transactions => {
      console.log(transactions)
      res.sendStatus(200).json(transactions);
    })
    .catch(err => console.log(err))
})

router.get('/create', (req, res) => {
  Transactions.create()
    .then(transactions => {
      console.log(transactions)
      res.sendStatus(200).json(transactions);
    })
    .catch(err => console.log(err))
})

module.exports = router 