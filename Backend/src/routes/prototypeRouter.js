const express = require("express");

const prototypeRouter = express.Router();

const Prototypedata = require("../model/Prototypedata");


// prototypes
prototypeRouter.get("/",(req,res) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    Prototypedata.find()
    .then(function(prototypes)
    {
        res.send(prototypes);
        
    });
});


// add new design
prototypeRouter.get("/addproto",(req,res)=>
{
    var prototypeItem1 = {
        category : "Top",
        color : "Red",
        image : "topproto1.png"
    }

    var proto1 = Prototypedata(prototypeItem1);
    proto1.save();
    res.send("success");
});


// single prototype
prototypeRouter.get("/singleproto/:prototype",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const prototype = req.params.prototype;

    Prototypedata.find({category : prototype})
    .then(function(prototype){
        res.send(prototype);
    });

});

module.exports = prototypeRouter;