const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Villes} = require('../models');

router.get('/', (req, res) => {
  Villes.findAll()
    .then(villes => {
      res.send(villes);
      res.sendStatus(200).json(villes);
    })
    .catch(err => console.log(err))
})

router.get('/destroy', (req, res) => {
  Villes.destroy()
    .then(villes => {
      res.send(villes);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
})

router.get('/create/:id', (req, res) => {
  const id = req.params.id
  Villes.create({nom_ville:id})
    .then(villes => {
      res.send(villes);
      res.sendStatus(200)
    })
    .catch(err => console.log(err))
})

module.exports = router 