var express = require("express"),
    mongoose = require("mongoose");
    CartController = require("../controller/CartController"),
    router =  express.Router();


router.get("/show-cart",CartController.cartShow);
router.get("/add-to-cart/:id",CartController.addToCart);
router.get("/delete-item/:id",CartController.deleteItem);

module.exports = router;
