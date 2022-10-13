const express = require("express");
const mongoose = require("mongoose");
const Brands = require("../model/brands");
const slugify = require("slug");
const db = require("../db/connect");

async function seedBrands(){
    console.log("Seeding New Brands in Database")
    const brands = new Brands({
        name:"Cross Stich",
        slug: slugify("Cross Stich"),
    })
    await brands.save();
}

seedBrands();
