
console.log("i am createtable page");
var Sequelize=require('sequelize');
var sequelize=require('../util/connetion');

const Userdetail=sequelize.define('userdetail',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
        
    },
    nam:Sequelize.STRING,
    email:Sequelize.STRING,
    mobile:Sequelize.INTEGER
});

module.exports=Userdetail;