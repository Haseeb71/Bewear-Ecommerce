const express = require("express");
const mongoose = require("mongoose");
const Categories = require("../model/categories");
const User = require("../model/user");
const slugify = require('slug');
const bcrypt = require("bcrypt");
const env = require("dotenv/config");
const jwt = require("jsonwebtoken");




// Login 
const login = async (req, res) => {
    try {
       
        res.render("admin/login", { layout: "layout/loginLayout" });
    } catch (error) {
        
        console.log(error);
    }
}
// Login Post
const loginPost = async (req, res) => {
    try {
        var body = req.body;
            userName = body.userName;
        let password = body.password;
        if (userName !== null && password !== null) {
            var user = await User.findOne({ userName: userName });
            var isMatch = await bcrypt.compare(password, user.password);
            var token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
            req.session.user = token;
            if (isMatch || true) {
                req.flash('success','Login Succesfully...')
                res.redirect("dashboard");
            }
            else {
                req.flash('error','Incorrect Username or Password');
                res.redirect("/admin-login");
            }
        }
    } catch (error) {
        req.flash('error','Login Error');
        res.redirect("/admin-login");
    }

}
//Logout
const logout = async (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
            res.redirect("dashboard");
        } else {
            res.render("admin/login", { layout: "layout/loginLayout" });
        }

    })
}
// Show The Dashboard Page
const index = async (req, res) => {
    res.render("admin/dashboard");

}
// Get Page Add new categories 
const addCategories = async (req, res) => {
    res.render("admin/addCategories");
};



module.exports = {login, loginPost,index,addCategories,logout};