const express = require("express");
const mongoose = require("mongoose");
const categories = require("../model/categories");
const slug = require('slug');
const db = require("../db/connect");

async function seedingCategories(){
    console.log("Seeding Categories into the Database")
        const Categories = new categories({
            name : "Women",
            slug : slug("Women")
            
        })
        Categories.save();
}
try {
    seedingCategories();
} catch (error) {
    console.log(error.message);
}