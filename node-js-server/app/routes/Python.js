const exp= require("express");
const fs = require("fs");
const python=require("../models/Python_mod");

const router = exp.Router();

router.post('/add',async(req,res)=>{
    var objpimg=req.files.pimg;
    objpimg.mv("./public/python_img/"+objpimg.name,async(err)=>{
        if(err){
            throw err;
        }
        else{
            var insertpython={
                topic: req.body.top,
                content1: req.body.cont1,
                content2: req.body.cont2,
                content3: req.body.cont3,
                content4: req.body.cont4,
                image: objpimg.name
            };
            await python.create(insertpython);
            res.json({msg:"Ins Python"});
        }
    })
});

router.get('/sel',async(req,res)=>{
    var data = await python.find();
    res.json(data);
});

router.post('/del',async(req,res)=>{
    var id= req.body.id;
    var ddata= await python.findById(id);

    fs.unlinkSync("./public/python_img/"+ddata.image);

    await python.findByIdAndDelete(id);
    res.json({msg: "Deleted"});
});

module.exports = router;