const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const app = express();
const uploads = require('./routes/uploads');
const downloads = require('./routes/downloads');


mongoose.connect('mongodb://localhost/upload',{useUnifiedTopology:true, useNewUrlParser:true})
.then(()=>console.log('connected to mongodb...'))
.catch(err=>console.log('could not connect to server..',err))

app.use(express.static(path.join(__dirname+'/public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',uploads);
app.use('/api/downloads',downloads);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}...`);
});
