
console.log("i am controller");
const product=require('../module/createtable');
exports.postadddata=(async(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    await product.create({
        nam:name,
        email:email,
    }).then((result=>{
        console.log("data inserted"+result);
    })).catch((err)=>{
        console.log(err);
    });
});

exports.fetchdata=(async(req,res,next)=>{
        const bookingdata=await product.findAll().then((result)=>{
            res.json({data:result})
        }).catch(err=>{
            console.log("err---"+err)
        })
        //res.json({msg: result})
    });


exports.deletedata=(async(req,res,next)=>{
    await product.destroy({where: {id:req.params.id}});
    res.json({msg:"delete succuessfull"});
});
