var express = require("express"),
    mongoose = require("mongoose");
    CustomerController = require("../controller/CustomerController"),
    router =  express.Router();

router.get("/",CustomerController.home);
router.get("/show-header",CustomerController.header);
router.get("/brand/:slug",CustomerController.brand);
router.get("/category/:slug",CustomerController.category);
router.get("/all-categories",CustomerController.allCategories);
router.get("/product/:slug",CustomerController.product);

module.exports = router;


