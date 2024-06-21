const express = require('express');
const axios = require("axios");

const app = express();
const port = 3000;



app.get('/test/companies/:company/categories/:catagory/products/product',(req,res)=>{
    const {company,category}=req.params;
    const {top,mimPrice,maxPrice}=req.query;

    if(StorageEvent.pro)
})

app.listen(port,() =>{
    console.log("running on 3000");
});