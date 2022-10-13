var mongoose = require("mongoose"),
    Product = require("../model/product"),
    ProductImages = require("../model/productImages");


// Add item to Cart 
const addToCart = async (req, res) => {
    const product = await Product.findById(req.params.id);
    const img = await ProductImages.findOne({}).where('productId').equals(req.params.id);
    if (!req.session.cart) {
        req.session.cart = {
            items: {},
            totalQty: 0,
            totalPrice: 0,
        };
    }
    let cart = req.session.cart;

    if (!cart.items[product._id]) {
        cart.items[product._id] = {
            item: product,
            qty: 1,
            image: img.image
        }
        cart.totalQty++;
        cart.totalPrice += product.price;
    } else {
        cart.items[product._id].qty++;
        cart.totalQty++;
        cart.totalPrice += product.price;
    }
    res.send(req.session.cart);   
};
// Showing the Cart On Page load
const cartShow = async(req,res)=>{
    if (!req.session.cart) {
        req.session.cart = {
            items: {},
            totalQty: 0,
            totalPrice: 0,
        };
    }
    res.json(req.session.cart);
};

// Delete an item from the cart 
const deleteItem = async(req,res)=>{

    let id = req.params.id;
    // Decrement in Total Quantity by 1 
    req.session.cart.totalQty = req.session.cart.totalQty - req.session.cart.items[id].qty;
    // Suntracting Product Price From Total price
    req.session.cart.totalPrice = req.session.cart.totalPrice - req.session.cart.items[id].item.price*req.session.cart.items[id].qty;
    delete req.session.cart.items[id];
    res.send(req.session.cart);
}

module.exports = { addToCart , cartShow , deleteItem};