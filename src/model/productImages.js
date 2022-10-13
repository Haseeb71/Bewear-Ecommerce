const mongoose = require("mongoose");

const productImages = new mongoose.Schema({

   productId : { type: String , required : true },
    image: { type:String , required : true },
    
    
})

module.exports = mongoose.model("productImages",productImages);
