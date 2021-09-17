const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Villes} = require('../models');

router.get('/', (req, res, next) => {
  Villes.findAll()
    .then(villes => {
      console.log(villes)
      res.sendStatus(200).json(villes);
    })
    .catch(err => console.log(err))
})

router.get('/destroy', (req, res) => {
  Villes.destroy()
    .then(villes => {
      console.log(villes)
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
})

router.get('/create', (req, res) => {
  Villes.create()
    .then(villes => {
      console.log(villes)
      res.sendStatus(200)
    })
    .catch(err => console.log(err))
})

router.get('/findById/:id', (req, res) =>{
  const id = req.params.id 
  Entrepots.findById(id)
  .then(entrepots => {
      console.log(entrepots)
    res.sendStatus(200).json(entrepots);
  })
  .catch(err => console.log(err))
});
module.exports = router 