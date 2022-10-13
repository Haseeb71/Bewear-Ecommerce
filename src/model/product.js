const mongoose = require("mongoose");

const product = mongoose.Schema({
    name: { type: String , required: true },
    slug: { type: String , required: true },
    price: { type: Number , required: true },
    description: { type: String , required: true },
    stock: { type: Number , required: true },
    stockStatus: { type: String , required: true },
    status: { type: String , required: true },
    featured: { type: String},
    brand: { type: String , required: true },
   
})

module.exports = mongoose.model("product",product);
    