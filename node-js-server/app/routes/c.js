const exp= require("express");
const fs = require("fs");
const c=require("../models/c_mod");

const router = exp.Router();

router.post('/add',async(req,res)=>{
    var objcimg=req.files.cimg;
    objcimg.mv("./public/c_img/"+objcimg.name,async(err)=>{
        if(err){
            throw err;
        }
        else{
            var insertc={
                topic: req.body.top,
                content1: req.body.cont1,
                content2: req.body.cont2,
                content3: req.body.cont3,
                content4: req.body.cont4,
                image: objcimg.name
            };
            await c.create(insertc);
            res.json({msg:"Ins C"});
        }
    })
});

router.get('/sel',async(req,res)=>{
    var data = await c.find();
    res.json(data);
});

router.post('/del',async(req,res)=>{
    var id= req.body.id;
    var ddata= await c.findById(id);

    fs.unlinkSync("./public/c_img/"+ddata.image);

    await c.findByIdAndDelete(id);
    res.json({msg: "Deleted"});
});

router.post("/data1",async(req,res)=>{
    var data1=await c.findById(req.body.id);
    res.json(data1);
});

module.exports = router;