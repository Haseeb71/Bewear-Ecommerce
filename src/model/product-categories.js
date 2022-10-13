const mongoose = require("mongoose");

const productCategories = new mongoose.Schema({

    productId: { type:String , required : true },
    productslug: { type:String , required : true },
    categories: [{ type:String , required : true }]
    
})

module.exports = mongoose.model("productCategories",productCategories);
