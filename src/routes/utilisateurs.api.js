const express = require('express');
const router = express.Router();

const db = require('../../config/databases');
const {Utilisateurs} = require('../models');

router.get('/', (req, res, next) => {
  Utilisateurs.findAll()
    .then(utilisateurs => {
      console.log(utilisateurs)
      res.sendStatus(200);
    })
    .catch(err => console.log(err))

})

module.exports = router 