const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    description:{
        type:String,
        min:4,
        max:1024,
        trim:true
    },
    image:{
        type:String,
    },
    id:{
        type:Number
    }
});

const Upload = mongoose.model('Upload',uploadSchema);


module.exports = Upload;