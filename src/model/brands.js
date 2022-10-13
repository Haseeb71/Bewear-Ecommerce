const mongoose = require("mongoose");

const Brands = new mongoose.Schema({
    name: { type: String , required : true },
    slug: { type: String , required : true }
})

module.exports = mongoose.model("brands",Brands);