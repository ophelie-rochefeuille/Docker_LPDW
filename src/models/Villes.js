const Sequelize=require('sequelize')
const db=require('../../config/database')

const Transactions=require('./Transactions')
const Entrepots=require('./Entrepots')

const Villes=db.define('Villes',{
    nom_ville:{
        type:Sequelize.STRING,
        primaryKey:true
    }
})

Villes.hasOne(Transactions,{as:'ville'})
Villes.hasOne(Entrepots,{as:'ville'})

module.exports=Villes