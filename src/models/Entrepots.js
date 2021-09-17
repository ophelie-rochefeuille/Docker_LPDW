const Sequelize=require('sequelize')
const db=require('../../config/database')
const Transactions=require('./Transactions')

const Entrepots=db.define('Entrepots',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nom_entrepot:{
        type:Sequelize.STRING
    }
})

Entrepots.hasOne(Transactions,{as:'entrepot'})

module.exports=Entrepots