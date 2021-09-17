const Sequelize=require('sequelize')
const db=require('../../config/database')

const Transactions=require('./Transactions')

const Trajets=db.define('Trajets',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    temperature:{
        type:Sequelize.INTEGER
    },
    longitude:{
        type:Sequelize.INTEGER
    },
    latitude:{
        type:Sequelize.INTEGER
    },
    date:{
        type:Sequelize.DATE
    }
})

module.exports=Trajets