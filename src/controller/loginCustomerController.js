var mongoose = require("mongoose"),
    Product = require("../model/product");
    ProductImages = require("../model/productImages");
    Customer = require("../model/customer");
    OrderDetails = require("../model/orderDetails");
    Order = require("../model/order"),
    nodemailer = require("nodemailer"),
    bcrypt = require("bcrypt"),
    customerEmail = require("../email/customerEmail");
    jwt = require("jsonwebtoken");
    env = require("dotenv/config");

// Sign Up Get
const signUp = async (req, res) => {
    res.render("ecommerce/signup", { layout: "layout/loginLayout" });
};

// Sign Up Post
const signUpPost = async (req, res) => {
    const body = req.body;

    isExist = await Customer.findOne({ email: body.email });
    if (isExist) {
        req.flash("error", "Accouont Already Exist");
        res.redirect("/customer/signup");
    } else {
        const newCustomer = new Customer({
            fname: body.fname,
            lname: body.lname,
            email: body.email,
            password: await bcrypt.hash(body.password, 10),
        });
        try {
            await newCustomer.save();
            req.flash("success", "Account Successfully Created..");
            res.redirect("/customer/login");
        } catch (error) {
            req.flash("error", "Something Went Wrong");
            res.redirect("/customer/signup");
        }
    }
}
// Login Get
const customerLogin = async (req, res) => {
    res.render("ecommerce/login", { layout: "layout/loginLayout" });
}
// login Post 
const customerLoginPost = async (req, res) => {
    const body = req.body;
    try {
        if (body.email !== null && body.password !== null) {
            const customer = await Customer.findOne({ email: body.email });
            const isMatch = await bcrypt.compare(body.password, customer.password);
            const token = jwt.sign({ _id: customer._id }, process.env.SECRET_KEY);
            req.session.customer = customer;
            req.session.customerToken = token;
            if(isMatch){
                req.flash("success","Successfully Login...");
                res.redirect("/");
            }
            else{
                req.flash("error", "Incorrect Email or Password")
                res.redirect("/customer/login");    
            }
        }
    } catch (error) {
        console.log(error);
        req.flash("error", "Login Error...")
        res.redirect("/customer/login");
    }
}
// Customer Logout
const customerLogut = async(req,res)=>{
    try {
        req.session.destroy();
        res.redirect("/customer/login");
    } catch (error) {
        console.log(error);
            res.redirect("/");
    }

}
// Customer Orders Page 
const customerOrders = async(req,res)=>{
    res.render("ecommerce/orderspage",{layout:"layout/ecommerce"})
}
// Checkout Get
const checkout = async (req, res) => {
    res.render("ecommerce/checkout", { layout: "layout/ecommerce" });
};

const checkoutPost = async (req, res) => {
    const body = req.body;
    // Storing New Details in an Object
    var Userpassword = generatePassword();
    const newDetails = {
        fname: body.fname,
        lname: body.lname,
        email: body.email,
        address: body.address,
        zip: body.zip,
        phone: body.phone,
        password: await bcrypt.hash(Userpassword, 10)
    }
    // Checking if the User already Exist
    const isExist = await Customer.findOne({ email: body.email });
    if (isExist) {
        var newCustomer = await Customer.findByIdAndUpdate(isExist._id, newDetails);
        console.log("Customer Details Updated");
    } else {
        var newCustomer = new Customer(newDetails);
        console.log("New Customer Registered");
    }
    // Saving Order in Order Table
    const newOrder = new Order({
        amount: req.session.cart.totalPrice,
        shipping: body.shipping,
        totalAmount: req.session.cart.totalPrice + parseInt(body.shipping),
        status: "pending",
        customerId: newCustomer._id,
    });
    // Saving Order Details
    for (let p of Object.values(req.session.cart.items)) {
        const NewOrderDetails = new OrderDetails({
            orderId: newOrder._id,
            productId: p.item._id,
            brand: p.item.brand,
            quantity: p.qty,
            unitPrice: p.item.price,
            totalPrice: p.qty * p.item.price,
        });
        try {
            await NewOrderDetails.save();
        } catch (error) {
            req.flash("error", "Something Went Wrong")
            res.redirect("/")
        }
    }
    // Sending The Email to Customer
    if (body.newAccount) {
        customerEmail(body.email, Userpassword);
    }
    try {
        await newOrder.save();
        await newCustomer.save();
        req.flash("success", "Your are Good to Continue");
        res.render("ecommerce/continueShopping", { layout: "layout/ecommerce" });
    } catch (error) {
        console.log(error);
        req.flash("error", "Something Went Wrong")
        res.redirect("/");
    }

};
// generating The Random Password for new Users;
function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


module.exports = { signUp, customerLogin, signUpPost, customerLoginPost, customerLogut,checkout, checkoutPost, 
    customerOrders};