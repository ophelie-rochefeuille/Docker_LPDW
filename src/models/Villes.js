const Sequelize=require('sequelize')
const db=require('../../config/database')

const Villes=db.define('Villes',{
    nom_ville:{
        type:Sequelize.STRING,
        primaryKey:true
    }
})

module.exports=Villes