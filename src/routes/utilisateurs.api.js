const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Utilisateurs} = require('../models');

router.get('/', (req, res, next) => {
  Utilisateurs.findAll()
    .then(utilisateurs => {
      res.send(utilisateurs);
      res.sendStatus(200).json(utilisateurs);
    })
    .catch(err => console.log(err))
})

router.get('/destroy', (req, res) => {
  Utilisateurs.destroy()
    .then(utilisateurs => {
      console.log(utilisateurs)
      res.sendStatus(200).json(utilisateurs);
    })
    .catch(err => console.log(err))
})

router.get('/create', (req, res) => {
  Utilisateurs.create()
    .then(utilisateurs => {
      console.log(utilisateurs)
      res.sendStatus(200).json(utilisateurs);
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
