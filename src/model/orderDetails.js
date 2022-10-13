const mongoose = require("mongoose");

const orderDetails = new mongoose.Schema({
    orderId : { type : String , required : true },
    productId : { type : String , required : true },
    brand : { type : String , required : true },
    quantity : { type : Number , required : true },
    unitPrice : { type : Number , required : true },
    totalPrice : { type : Number , required : true },

});

module.exports = mongoose.model("orderDetails",orderDetails);