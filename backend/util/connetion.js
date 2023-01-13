// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root"
// });

// con.connect(err=>{
//     if(err) throw err;
//     console.log("connected!!");
//     con.query("create Database bookingapp",(err,result)=>{
//         if(err) throw err;
//         console.log("Database created successfully");
//     });
// });

// module.exports=con;
console.log("i am connection page");
const Sequelize = require('sequelize');

const sequelize = new Sequelize('bookingapp', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;


