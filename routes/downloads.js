const download = require("download");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const mongoose = require("mongoose");
const Upload = require("../models/upload");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("/home/tushar/Desktop/upload-files/public/download.html");
});


router.get("/download", (req, res) => {
    console.log('heyr tygh');
    const filename = req.query.name;
    const path = Upload.find({id:filename},function(err,resp){
        if(err){
            console.log(err)
        }
        else{
            console.log(resp[0])
            const filePath = `/home/tushar/Desktop/upload-files/${resp[0].image}`;
            // res.send({"name":resp[0].image.replace("uploads/","")}
            res.setHeader("Content-Dispositon",resp[0].image)
            // res.download(filePath,'kdkwgfjehgfhjegjf'0)
    
    
        }
    });
    
});
module.exports = router;
