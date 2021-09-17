const express = require('express')
const app = express()
const port = 3000

const db=require('../config/database')
db.sync()

db.authenticate()
    .then(()=>console.log('Database connected...'))
    .catch(err=>console.log('Error: '+err))
const {City,Truck,Temperature}=require('./models')



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})