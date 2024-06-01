const Data=require("../Data/Data")
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db=Data.getInstance();
require('dotenv').config()


router.post("/Login", async (req,res)=>{
    const {Email,Password}=req.body;
    try{
        const [query]=await db.execute("SELECT * FROM Users WHERE Email=?",[Email])
        
        if(query.length==0){
          return  res.status(402).json({Mesaj:"Credidentiale invalide"});
        }

        const potrivire = await bcrypt.compare(Password, query[0].Password);
        if (!potrivire) {
          return  res.status(402).json({ message: "Credidentiale invalide" });
        }

        const token=jwt.sign({ id: query[0].Id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "24h" })
        res.status(200).json({token});
    }
    catch(err){
       return res.status(500).json(err);
    }
});

router.post("/SignUp", async(req,res)=>{
    const {Email,Nickname, Password}=req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);
    
    try{
        const [query]=await db.execute("INSERT INTO Users(Email,Nickname, Password) VALUES (?, ?,?)",[Email, Nickname, hashedPassword]);
        const [queryInter]=await db.execute("SELECT Id FROM Users WHERE Email=?",[Email]);
        const [query2]=await db.execute("INSERT INTO PROFILE(USER_ID) VALUES (?)",[queryInter[0].Id]);
        res.status(200).json({ message: "Utilizator creat" });
    }
    catch(err){
        res.status(500).json(err);
    }
})




module.exports=router;