const Data=require("../Data/Data");
const express = require("express");
const router = express.Router();
const db=Data.getInstance();


router.post("/Games", async (req,res)=>{

    try{

    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/Games", async(req,res)=>{
    try{

    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/Games/:Name", async(req,res)=>{
    try{

    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/ListGames/:Name/:Category", async(req,res)=>{
    try{

    }catch(err){
        res.status(500).json(err);
    }
})


router.put("/Games", async(req,res)=>{
    try{

    }catch(err){
        res.status(500).json(err);
    }
})


router.delete("/Games", async(req,res)=>{
    try{

    }catch(err){
        res.status(500).json(err);
    }
})



module.exports=router;