const Data=require("../Data/Data");
const express = require("express");
const router = express.Router();
const db=Data.getInstance();
const { Autentificare } = require("../Middleware/Auth");

router.post("/Comment/:IdGame",Autentificare, async(req,res)=>{
    const {Comment, Rating}=req.body;
    try{
        const [query]= await db.execute("INSERT INTO REVIEWS(Comment,UserId,IdGame, Rating) VALUES(?,?,?,?)",[Comment,req.auth.id,req.params.IdGame,Rating]);
        res.status(200).json({Message:"Operatiune efectuata cu succes"});
    }catch(err){
        res.status(500).json(err);
    }
})


router.get("/Comment/:IdGame",Autentificare, async(req,res)=>{
    try{
        const [query]=await db.execute("SELECT * FROM REVIEWS WHERE IdGame = ?",[req.params.IdGame]);
        res.status(200).json(query);
    }catch(err){
        res.status(500).json(err);
    }
})

router.put("/Comment/:IdComment",Autentificare, async(req,res)=>{
    const {Comment,Rating}=req.body;
    try{
        const [query]=await db.execute("UPDATE REVIEW SET COMMENT=?,RATING=? WHERE Id=?",[Comment,Rating,req.params.IdComment]);
        res.status(200).json({Message:"Operatiune efectuata cu succes"});
    }catch(err){
        res.status(500).json(err);
    }
})

router.delete("/Comment/:IdComment",Autentificare, async(req,res)=>{
    try{
        const [query]=await db.execute("DELETE REVIEW WHERE Id=?",[req.params.IdComment]);
        res.status(200).json({Message:"Operatiune efectuata cu succes"});
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;