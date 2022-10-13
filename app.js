require("dotenv/config");
var express = require("express"),
mongoose = require("mongoose"),
bodyParser = require("body-parser"),
path = require("path"),
session = require('express-session'),
MongoStore = require('connect-mongo'),
env = require("dotenv/config"),
cheerio = require('cheerio'),
db = require("./src/db/connect"),
expressLayouts = require('express-ejs-layouts'),
slug = require('slug'),
bcrypt = require('bcrypt'),
multer  = require('multer'),
flash = require('connect-flash'),
Joi = require('joi'),
nodemailer = require("nodemailer");
app = express();
const port = process.env.port || 3000;

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI}),
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  }))
app.use(flash());
app.use(function(req, res, next) {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.session = req.session;
  next();
})

app.use(express.static(path.join(__dirname,'public'))); 

app.set("view engine","ejs");
app.use(expressLayouts);
app.set("layout","./layout/main");


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(require("./src/routes/index"));
app.use(require("./src/routes/admin"));
app.use(require("./src/routes/customer"));
app.use(require("./src/routes/cart"));
app.use(require("./src/routes/loginCustomer"));


app.listen(port,()=>{
    console.log(`Port is running at ${port}`);
})