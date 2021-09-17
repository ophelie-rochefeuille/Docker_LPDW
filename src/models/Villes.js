const Sequelize=require('sequelize')
const db=require('../../config/database')
const Transactions=require('./Transactions')

const Villes=db.define('Villes',{
    nom_ville:{
        type:Sequelize.STRING,
        primaryKey:true
    }
})

Villes.hasOne(Transactions)

module.exports=Villes