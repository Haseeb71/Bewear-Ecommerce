const express = require("express");
const mongoose = require("mongoose");
const user = require("../model/user");
const bcrypt = require("bcrypt");
const db = require("../db/connect");

async function seedingUser(){
    console.log("Seeding User into the Database")
        const User = new user({
          userName: "hs71",
          password : await bcrypt.hash("12", 10),
        })
       await User.save();
}
try {
    seedingUser();
} catch (error) {
    console.log(error);
}