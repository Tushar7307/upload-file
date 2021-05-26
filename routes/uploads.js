const nodemailer = require("nodemailer");
const multer = require("multer");
const mongoose = require("mongoose");
const Upload = require("../models/upload");
const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.sendFile("/home/tushar/Desktop/upload-files/public/upload.html");
});

router.post("/", upload.array("files"),uploadFiles);
async function uploadFiles(req, res) {
    console.log(req.files)

    const imageInfo = new Upload({
        description:req.body.description,
        id:req.body.id,
        image: req.files[0].path
    });
    
    await imageInfo.save();
	console.log(req.query);
	console.log(req.files);
	res.json({ message: "Successfully uploaded files" });
}

module.exports = router;
