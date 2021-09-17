const Sequelize=require('sequelize')
const db=require('../../config/database')

const Camions=db.define('Camions',{
    plaque:{
        type:Sequelize.STRING(9),
        primaryKey:true
    }
})

module.exports=Camions