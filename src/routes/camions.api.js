const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Camions} = require('../models');

router.get('/', (req, res, next) => {
  Camions.findAll()
    .then(camions => {
      console.log(camions)
      res.sendStatus(200).json(camions);
    })
    .catch(err => console.log(err))
});


router.get('/destroy', (req, res) => { 
  Camions.destroy()
    .then(camions => {
      console.log(camions)
      res.sendStatus(200).json(camions);
    })
    .catch(err => console.log(err))
});

router.get('/create', (req, res) => {
  Camions.create()
    .then(camions => {
      console.log(camions)
      res.sendStatus(200).json(camions);
    })
    .catch(err => console.log(err))
});

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