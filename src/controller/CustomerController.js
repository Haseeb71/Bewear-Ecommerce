var mongoose = require("mongoose"),
    Product = require("../model/product"),
    Brands = require("../model/brands"),
    Categories = require("../model/categories"),
    Product = require("../model/product"),
    ProductImages = require("../model/productImages"),
    ProductCategories = require("../model/product-categories"),
    Cart = require("../model/cart"),
    Noty = require("noty");
  


// Hader Data 
const header = async(req,res)=>{
    const brands = await findBrand();
    const categories = await findCategories();
    res.send({brands,categories});
}
// To Show the Customer side Home page 
const home = async (req, res) => {
    const featured = await Product.find({}).where('featured').equals("featured").limit(8);
    const images = await findImages('productId', featured);
    res.render("ecommerce/home", {
        layout: 'layout/ecommerce',
        featured: featured,
        images: images
    });
};

// To show the individual Brand Page 
const brand = async (req, res) => {
    
    const brandProducts = await Product.find({}).where('brand').equals(req.params.slug);
    const images = await findImages('productId', brandProducts);
    res.render("ecommerce/brand", {
        layout: 'layout/ecommerce',
        brands: await findBrand(),
        categories: await findCategories(),
        brandproducts: brandProducts,
        images: images,
        title: req.params.slug
    });
}

// To show the Cateori=y page 
const category = async (req, res) => {
    
    const cat = await ProductCategories.find({}).where('categories').equals(req.params.slug);
    var matchproducts = [];
    for (let i = 0; i < cat.length; i++) {
        const product = await Product.findById(cat[i].productId);
        matchproducts[i] = product;
    }
    const images = await findImages('productId', matchproducts);
    res.render("ecommerce/category", {
        layout: "layout/ecommerce",
        brands: await findBrand(),
        categories: await findCategories(),
        products: matchproducts,
        images: images,
        title: req.params.slug
    })
};

// To show All Categories in a page 
const allCategories = async (req, res) => {

    res.render("ecommerce/allCategories", {
        layout: "layout/ecommerce",
        categories: await findCategories()
    });
};

// To show single Product Details
const product = async (req, res) => {
    const pro = await Product.findOne({}).where('slug').equals(req.params.slug);
    const images = await ProductImages.find({}).where('productId').equals(pro._id);
    res.render("ecommerce/product", {
        layout: "layout/ecommerce",
        product: pro,
        images: images
    });
};



// Global function to find All Brands
const findBrand = async () => {
    const brands = await Brands.find({});
    return brands;
};

// Global function to find All Brands
const findCategories = async () => {
    const categories = await Categories.find({});
    return categories;
};

// Gloabal Function to find the Images of products
const findImages = async (feild, products) => {
    var imgArray = [];
    for (let i = 0; i < products.length; i++) {
        const images = await ProductImages.findOne({}).where(feild).equals(products[i]._id);
        imgArray[i] = images;
    }
    return imgArray;
}

module.exports = { home, brand, category, allCategories, product, header};
