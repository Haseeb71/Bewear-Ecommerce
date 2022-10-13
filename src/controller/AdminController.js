const mongoose = require("mongoose");
const Categories = require("../model/categories");
const User = require("../model/user");
const Brands = require("../model/brands");
const Product = require("../model/product");
const ProductCategories = require("../model/product-categories");
const ProductImages = require("../model/productImages");
const Customers = require("../model/customer");
const slugify = require("slug");
const fs = require('fs');
const db = require("../db/connect");

const showCategories = async (req, res) => {
    const found = await Categories.find({});
    res.send(found);
}

// Posting Category into Database
const categoryStore = async (req, res) => {
    try {
        let name = req.body.name;
        // console.log(name);
        let slug = slugify(name);
        const newCategories = new Categories({
            name: name,
            slug: slug
        })
        await newCategories.save();
        res.send(newCategories);
    } catch (error) {
        console.log(error);
        req.flash('error','Category ALready Exist...')
        res.redirect("/addCategories")
    }
}


const removeCategories = async (req, res) => {
    await Categories.findByIdAndRemove(req.params.id);
    const found = await Categories.find({});
    res.send(found);
};

const editCategories = async (req, res) => {
    const found = await Categories.findOne({}).where("slug").equals(req.params.slug);
    res.send(found);
}

const editCatPost = async (req, res) => {

    const found = await Categories.findOne({}).where("slug").equals(req.params.slug);
    let name = req.body.name2;
    let slug = slugify(name);
    updated = { name: name, slug: slug };
    await Categories.findByIdAndUpdate(found._id, updated);
    const data = await Categories.find({});
    res.send(data);
};

// Product 


// Show the Page to add new Product
const showAddProduct = async (req, res) => {
    const brands = await Brands.find({});
    const categories = await Categories.find({});
    res.render("admin/addProduct", {
        brands: brands,
        cat: categories
    });
}

// Post product in Database 
const productPost = async (req, res) => {
    const body = req.body;
    const newProduct = new Product({
        name: body.name,
        slug: slugify(body.name),
        price: body.price,
        description: body.description,
        stockStatus: body.sStatus,
        status: body.status,
        stock: body.stock,
        featured: body.featured,
        brand: body.brands,
    })
    const productcategory = new ProductCategories({
        productId: newProduct._id,
        productslug: newProduct.slug,
        categories: body.category,
    })

    for (let i = 0; i < req.files.image.length; i++) {
        const images = new ProductImages({
            productId: newProduct._id,
            image: req.files.image[i].filename,
        })
        await images.save();
    }
    try {
        await newProduct.save();
        await productcategory.save();
        req.flash('success','New Product Added Successfuly...')
        res.redirect("/product-list")
    } catch (error) {
        console.log(error);
        res.redirect("/dashboard")
    }
};

// Show All products list
const productList = async (req, res) => {
    const product = await Product.find({});
    res.render("admin/productList", { product: product });
};

const productRemove = async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.id);
        await ProductImages.deleteMany({ productId: req.params.id });
        await ProductCategories.deleteMany({ productId: req.params.id });
        //const found2 = await ProductCategories.findOne({}).where("productId").equals(req.params.id); 
        //await ProductCategories.findByIdAndRemove(found2._id);
        req.flash('error','Product Deleted Successfuly...')
        res.redirect("/product-list");
    } catch (error) {
        res.redirect("/product-list");
        console.log(error);
    }
};

// get Product Edit 
const productEdit = async (req, res) => {
    const found = await Product.findById(req.params.id);
    const brand = await Brands.find({});
    const cat = await Categories.find({});
    const pcat1 = await ProductCategories.findOne({}).where('productId').equals(req.params.id);
    const pcat2 = pcat1.categories;
    const image = await ProductImages.find({}).where('productId').equals(req.params.id);
    res.render("admin/productEdit", { product: found, brands: brand, cat: cat, pcat: pcat2, image: image })
};

// Edited Product Data Post 
const productEditPost = async (req, res) => {
    const body = req.body;
    if (body.featured == undefined) {
        var fe = ""
    } else {
        fe = body.featured;
    }
    let newData = {
        name: body.name,
        slug: slugify(body.name),
        price: body.price,
        description: body.description,
        stockStatus: body.sStatus,
        status: body.status,
        stock: body.stock,
        featured: fe,
        brand: body.brands
    }
    if(req.files.image !== undefined){
    for (let i = 0; i < req.files.image.length; i++) {
        const images = new ProductImages({
            productId: req.params.id,
            image: req.files.image[i].filename,
        })
        await images.save();
    }}
    const productcategory ={
        productId: req.params.id,
        productslug: slugify(body.name),
        categories: body.category,
    }
    try {
        const pcat = await ProductCategories.findOne({}).where('productId').equals(req.params.id);
        await ProductCategories.findByIdAndUpdate(pcat._id,productcategory)
        await Product.findByIdAndUpdate(req.params.id, newData);
        req.flash('success','Product Edited Successfuly...')
        res.redirect("/product-list");
    } catch (error) {
        console.log(error);
        const id = req.params.id;
        req.flash('error','Error in Edit...')
        res.redirect(`/product-edit/${id}`);
    }
}

// To delete image from Edit Page
const delimg = async (req, res) => {

    const found = await ProductImages.findByIdAndRemove(req.params.id);
    const id = found.productId;
    req.flash('success','Image Deleted...')
    res.redirect(`/product-edit/${id}`);
}

// Showing Product All Details
const imgDetails = async(req,res)=>{
    const found = await Product.findById(req.params.id);
    const pcat = await ProductCategories.findOne({}).where('productId').equals(req.params.id);
    const pcat2 = pcat.categories;
    const image = await ProductImages.find({}).where('productId').equals(req.params.id);
    res.render("admin/productDetails",{product:found,pcat:pcat2,image:image});
}

// To Show customers Page on Admin Panel
const customerPage = async(req,res)=>{
    const customer = await Customers.find({});
    res.render("admin/customers",{
        layout:"layout/main",
        customers : customer
    })
};

// Customer Edit Get
const customerEdit = async(req,res)=>{
    console.log(req.params.id);
    const customer = await Customers.findById(req.params.id);
    res.render("admin/customerEdit",{layout:"layout/main",customer:customer})
}
// Customer Edit Get
const customerEditPost = async(req,res)=>{
    try {
        const body = req.body;
        const newData = {
            fname : body.fname,
            lname : body.lname,
            phone : body.phone,
            email : body.email,
            zip   : body.zip,
            address : body.address
        }
        await Customers.findByIdAndUpdate(req.params.id,newData);
        req.flash("success","Customer Data Successfully Updated");
        res.redirect("/customer-details");    
    } catch (error) {
        console.log(error);
        req.flash("error","Something Went Wrong");
        res.redirect("/customer-details")
    }
   
}

module.exports = {
    showCategories, categoryStore, removeCategories, editCategories, editCatPost
    , showAddProduct, productPost, productList, productRemove, productEdit, productEditPost, delimg,imgDetails,
    customerPage,customerEdit,customerEditPost
}