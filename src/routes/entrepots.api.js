const express = require('express');
const router = express.Router();

const db = require('../../config/databases');
const {Entrepots} = require('../models');

router.get('/', (req, res, next) => {
  City.findAll()
    .then(entrepots => {
      console.log(entrepots)
      res.sendStatus(200);
    })
    .catch(err => console.log(err))

})