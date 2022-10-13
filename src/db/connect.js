const mongoose = require("mongoose");  

mongoose.connect("mongodb://localhost:27017/Ecommerce",{
    // useNewUrlParser: false,
    // useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log("Mongoose Connection Successful")
}).catch((e)=>{
    console.log(e);
})