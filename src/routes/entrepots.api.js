const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Entrepots} = require('../models');

router.get('/', (req, res, next) => {
  Entrepots.findAll()
    .then(entrepots => {
      console.log(entrepots)
      res.sendStatus(200).json(entrepots);
    })
    .catch(err => console.log(err))
})

router.get('/destroy', (req, res) => {
  Entrepots.destroy()
    .then(entrepots => {
      console.log(entrepots)
      res.sendStatus(200).json(entrepots);
    })
    .catch(err => console.log(err))
})

router.get('/create', (req, res) => {
  Entrepots.create()
    .then(entrepots => {
      console.log(entrepots)
      res.sendStatus(200).json(entrepots);
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