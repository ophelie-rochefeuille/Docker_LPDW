const Sequelize=require('sequelize')
const db=require('../../config/database')
const Transactions=require('./Transactions')

const Camions=db.define('Camions',{
    plaque:{
        type:Sequelize.STRING(9),
        primaryKey:true
    }
})

Camions.hasOne(Transactions,{as:'plaque'})

module.exports=Camions