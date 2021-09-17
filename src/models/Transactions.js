const Sequelize=require('sequelize')
const db=require('../../config/database')
const Trajets=require('./Trajets')

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

Transactions.hasOne(Trajets,{as:'id_trajet'})

module.exports=Transactions