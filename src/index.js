const express = require('express')
const app = express()
const port = 3000

const db=require('../config/database')
db.sync()

db.authenticate()
    .then(()=>console.log('Database connected...'))
    .catch(err=>console.log('Error: '+err))
const {Villes,Camions,Trajets,Transactions,Entrepots,Utilisateurs}=require('./models/index')
const {VillesAPI, CamionsAPI, TrajetsAPI, TransactionsAPI, EntrepotsAPI, UtilisateursAPI}=require('./routes/index')
db.sync()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;