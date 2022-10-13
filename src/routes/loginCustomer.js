var express = require("express"),
    mongoose = require("mongoose");
    loginCustomer = require("../controller/loginCustomerController"),
    validcheckout = require("../middlewares/validCheckout"), 
    validsignUp = require("../middlewares/validSignup"), 
    loginCustomerAuth = require("../middlewares/loginCustomerAuth");
    router =  express.Router();

router.get("/customer/signup",loginCustomer.signUp);
router.post("/customer/signup",validsignUp,loginCustomer.signUpPost);

router.get("/customer/login",loginCustomer.customerLogin);
router.post("/customer/login",loginCustomer.customerLoginPost);

router.get("/customer/logout",loginCustomer.customerLogut);

router.get("/customer/orders",loginCustomerAuth,loginCustomer.customerOrders);


router.get("/customer/checkout",loginCustomer.checkout);
router.post("/customer/checkout",validcheckout,loginCustomer.checkoutPost);

module.exports = router;