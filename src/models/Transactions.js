const Sequelize=require('sequelize')
const db=require('../../config/database')

const Transactions=db.define('villes',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    user:{
        type:Sequelize.STRING
    },
    plaque:{
        type:Sequelize.STRING(9)
    },
    poulet:{
        type:Sequelize.INTEGER
    },
    entrepot:{
        type:Sequelize.INTEGER
    },
    ville:{
        type:Sequelize.STRING
    },
    type:{
        type:Sequelize.STRING(7)
    },
    date:{
        type:Sequelize.DATE
    }
})

module.exports=Transactions