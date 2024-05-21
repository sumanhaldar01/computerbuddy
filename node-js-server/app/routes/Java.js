const exp= require("express");
const fs = require("fs");
const java=require("../models/Java_mod");

const router = exp.Router();

router.post('/add',async(req,res)=>{
    var objjimg=req.files.jimg;
    objjimg.mv("./public/java_img/"+objjimg.name,async(err)=>{
        if(err){
            throw err;
        }
        else{
            var insertjava={
                topic: req.body.top,
                content1: req.body.cont1,
                content2: req.body.cont2,
                content3: req.body.cont3,
                content4: req.body.cont4,
                image: objjimg.name
            };
            await java.create(insertjava);
            res.json({msg:"Ins Java"});
        }
    })
});

router.get('/sel',async(req,res)=>{
    var data = await java.find();
    res.json(data);
});

router.post('/del',async(req,res)=>{
    var id= req.body.id;
    var ddata= await java.findById(id);

    fs.unlinkSync("./public/java_img/"+ddata.image);

    await java.findByIdAndDelete(id);
    res.json({msg: "Deleted"});
});

router.post("/data",async(req,res)=>{
    var data1=await java.findById(req.body.id);
    res.json(data1);
});

module.exports = router;