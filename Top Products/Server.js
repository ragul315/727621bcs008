const express = require('express');
const axios = require("axios");
const store = require('./store');

const app = express();
const port = 3000;



app.get('/test/companies/:company/categories/:category/products/product',(req,res)=>{
    const {company,category}=req.params;
    const {top,minPrice,maxPrice}=req.query;

    if(store.products[company]&&store.products[company][category]){
        let products = store.products[company][category];
        if(minPrice&&maxPrice){
            products= products.filter(product => product.price>=parseFloat(minPrice)&&product.price<=parseFloat(maxPrice));
        }
        const topp = parseInt(top) || products.length;
        res.json(products.slice(0,topp));
    }else{
        res.status(404).json({error:'company or category not found'});
    }
});

app.listen(port,() =>{
    console.log("running on 3000");
});