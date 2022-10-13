const express = require("express");
const mongoose = require("mongoose");

const user = new mongoose.Schema({
    userName: { type:String , required : true },
    password: { type:String , required : true },
    token: { type:String}
    
})

module.exports = mongoose.model("user",user);

