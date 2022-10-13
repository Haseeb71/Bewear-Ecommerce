const mongoose = require("mongoose");

const order = new mongoose.Schema({
    amount: { type: Number, required: true },
    shipping: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true },
    customerId: { type: String, required: true },
})

module.exports = mongoose.model("order",order);