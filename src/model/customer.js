const mongoose = require("mongoose");

const customer = new mongoose.Schema({
    fname : { type: String, required : true }, 
    lname : { type: String, required : true }, 
    email : { type: String, required : true }, 
    password : { type: String, required : true }, 
    address : { type: String }, 
    zip : { type: Number  }, 
    phone : { type: Number  }, 
    
    
})

module.exports = mongoose.model("customer",customer);