const express = require("express");

async function verifyToken(req,res,next){
    
    if(req.session.user == null){

         console.log("Token is not Varified");
         req.flash('error','Login First');
         res.redirect("/admin-login");
    }
    else{
       //    console.log("Token Varified");
        next();
    }
}

module.exports = verifyToken;