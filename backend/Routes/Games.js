const Data=require("../Data/DbConnection");
const express = require("express");
const router = express.Router();
const db=Data.getInstance();
const multer=require('multer');
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


router.post("/Games",upload.single('image'), async (req,res)=>{
    const {Name,Description,Category}=req.body;
    const {filename,path}=req.file;
    try{
        const [query]=await db.execute("INSERT INTO GAMES(Name,Description,Category,Image) VALUES(?,?,?,?)",[Name,Description,Category,filename])
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/RecommendMe",Autentificare, async(req,res)=>{
    try{
        const [query]=await db.execute("SELECT * FROM GAMES ORDER BY RAND() LIMIT 1");
        res.status(200).json(query);
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

router.get("/SearchGames/:Name/:Category", async(req,res)=>{
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


router.post("/ListGames/:Id",Autentificare, async(req,res)=>{
    try{
        const [query]=await db.execute("INSERT INTO GAME_LIST(USER_ID,GAME_ID) VALUES(?,?)",[req.auth.id,req.params.Id]);
        req.status(200).json({Message:"Operatiune realizata cu succes"});
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/ListGames",Autentificare,async(req,res)=>{
    try{
        const [query]=await db.execute("SELECT g.* FROM GAMES AS g,GAME_LIST AS l WHERE g.Id=l.GAME_ID AND l.USER_ID=?",[req.auth.id])
        req.status(200).json({Message:"Operatiune realizata cu succes"});
    }catch(err){
        res.status(500).json(err);
    }
})




module.exports=router;