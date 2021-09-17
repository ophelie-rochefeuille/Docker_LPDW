const express = require('express');
const router = express.Router();

const db = require('../../config/databases');
const {Transactions} = require('../models');

router.get('/', (req, res, next) => {
  City.findAll()
    .then(transactions => {
      console.log(transactions)
      res.sendStatus(200);
    })
    .catch(err => console.log(err))

})