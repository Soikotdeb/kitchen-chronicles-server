
const express = require('express');
 const app = express();
 const cors = require('cors');
 const port =process.env.PORT || 5000;
 const Kitchen = require('./data/Kitchen.json')

 app.use(cors());
 
 app.get('/',(req,res)=>{
    res.send('Kitchen is running')
 })

 app.get('/Kitchen',(req,res)=>{
    res.send(Kitchen)
     })

 app.listen(port,()=>{
    console.log(`Kitchen api is running on port ${port}`);
 })