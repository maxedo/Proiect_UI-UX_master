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