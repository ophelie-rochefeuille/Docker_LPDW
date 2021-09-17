const Sequelize=require('sequelize')
const db=require('../../config/database')
const Transactions=require('./Transactions')

const Utilisateurs=db.define('Utilisateurs',{
    login:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    nom:{
        type:Sequelize.STRING
    },
    prenom:{
        type:Sequelize.STRING
    },
    mdp:{
        type:Sequelize.TEXT
    }
})

Utilisateurs.hasOne(Transactions,{as:'user'})

module.exports=Utilisateurs