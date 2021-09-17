const Sequelize=require('sequelize')
const db=require('../../config/database')

const Villes=require('./Villes')
const Utilisateurs=require('./Utilisateurs')
const Camions=require('./Camions')
const Entrepots=require('./Entrepots')

const Transactions=db.define('villes',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    poulet:{
        type:Sequelize.INTEGER
    },
    type:{
        type:Sequelize.STRING(7)
    },
    date:{
        type:Sequelize.DATE
    }
})

Transactions.hasOne(Villes)
Transactions.hasOne(Utilisateurs)
Transactions.hasOne(Camions)
Transactions.hasOne(Entrepots)

module.exports=Transactions