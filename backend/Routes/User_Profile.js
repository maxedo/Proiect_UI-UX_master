const Data=require("../Data/Data");
const express = require("express");
const router = express.Router();
const db=Data.getInstance();
const multer=require('multer')
const { Autentificare } = require("../Middleware/Auth");

const filtruimagine = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb("Doar fisierele de tip imagine sunt permise.", false);
    }
  };
  
const stocare= multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../Poze_users")
    },
    filename: function (req, file, cb) {
      const sufixunic = Date.now() + '-' + Math.round(Math.random() * 1E9);
      originalName=file.originalname;
      const fileExtension = originalName.substring(originalName.lastIndexOf('.'));
      cb(null, file.fieldname + '-' + sufixunic+fileExtension)
    }
  })


router.put("/AboutMe",Autentificare, async (req,res)=>{
  try{
    const {AboutMe}=req.body;
    const [query]=await db.execute("UPDATE PROFILE SET ABOUT_ME=? WHERE USER_ID=?",[AboutMe,req.auth.id]);
    res.status(200).json("Operatiune realizata cu succes");
  }catch(err){
    res.status(500).json(err);
  }
})

  
const upload = multer({ storage: stocare,fileFilter: filtruimagine })
