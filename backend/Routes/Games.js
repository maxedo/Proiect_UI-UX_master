const Data=require("../Data/Data");
const express = require("express");
const router = express.Router();
const db=Data.getInstance();
const multer=require('multer')

const filtruimagine = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb("Doar fisierele de tip imagine sunt permise.", false);
    }
  };
  
const stocare= multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../Poze_jocuri")
    },
    filename: function (req, file, cb) {
      const sufixunic = Date.now() + '-' + Math.round(Math.random() * 1E9);
      originalName=file.originalname;
      const fileExtension = originalName.substring(originalName.lastIndexOf('.'));
      cb(null, file.fieldname + '-' + sufixunic+fileExtension)
    }
  })
  
const upload = multer({ storage: stocare,fileFilter: filtruimagine })


router.post("/Games", async (req,res)=>{

    try{

    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/Games", async(req,res)=>{
    try{
        const [query]=await db.execute("SELECT * FROM GAMES ORDER BY RAND()");
        res.status(200).json(query);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/Games/:Name", async(req,res)=>{
    try{
        const [query]=await db.execute("SELECT * FROM GAMES WHERE NAME LIKE ?",[req.params.Name]);
        res.status(200).json(query);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/ListGames/:Name/:Category", async(req,res)=>{
    try{
        const [query]=await db.execute("SELECT * FROM GAMES WHERE NAME LIKE ? AND CATEGORY LIKE ?",[req.params.Name,req.params.Category]);
        res.status(200).json(query);
    }catch(err){
        res.status(500).json(err);
    }
})



router.delete("/Games/:Id", async(req,res)=>{
    try{
        const [query]=await db.execute("DELETE FROM GAMES WHERE Id=?",[req.params.Id]);
        req.status(200).json({Message:"Operatiune realizata cu succes"});
    }catch(err){
        res.status(500).json(err);
    }
})



module.exports=router;