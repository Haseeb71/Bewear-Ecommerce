const express = require("express");
const jwt = require("jsonwebtoken");
const env = require("dotenv/config");

async function verifyCustomer(req,res,next){
    
    if(req.session.customerToken == null){
         console.log("Token is not Varified");
         req.flash('error','Login First');
         res.redirect("/customer/login");
    }
    else{
        const varified = jwt.verify(req.session.customerToken,process.env.SECRET_KEY);
        console.log(varified);
        next();
    }
}

module.exports = verifyCustomer;