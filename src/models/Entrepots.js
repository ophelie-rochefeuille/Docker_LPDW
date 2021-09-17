const Sequelize=require('sequelize')
const db=require('../../config/database')
const Villes=require('./Villes')

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

Entrepots.hasOne(Villes)

module.exports=Entrepots