const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const router=require('./router/indexrouter');

var cors = require('cors');
const sequelize= require('./module/createtable');
//app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(router);

/////////////using without routing///////////////////
// app.post('/',async(req,res,next)=>{
//     console.log("hey i am calling");
//     console.log(req.body.name);
   

//     const name=req.body.name;
//     const email=req.body.email;
//    await sequelize.create({
//         nam:name,
//         email:email,
//     }).then((result=>{
//         console.log("data inserted"+ result);
//         res.json({msg: result})
//     })).catch((err)=>{
//         console.log(err);
//     });
    
// })
// app.get('/fetchdata',async(req,res,next)=>{
//     const bookingdata=await sequelize.findAll().then((result)=>{
//         res.json({data:result})
//     }).catch(err=>{
//         console.log("err---"+err)
//     })
//     //res.json({msg: result})
// })


// app.use('/deleteuser/:id',async(req,res,next)=>{
//     console.log(req.params.id);
//     await sequelize.destroy({where: {id:req.params.id}});
//     res.json({msg:"delete succuessfull"});
// });


sequelize.sync().then((result)=>{
    console.log("-------"+result);
    app.listen(4000);
}).catch(err=>{
    console.log(err);
});
//app.listen(4000);