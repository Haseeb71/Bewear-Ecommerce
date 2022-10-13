const Joi = require("joi");

const checkoutValidation = function(req, res, next) {

    const schema = Joi.object({
        fname:Joi.string().required(),
        lname:Joi.string().required(),
        email:Joi.string().email().required(),
        address:Joi.string().required(),
        city:Joi.string().required(),
        shipping:Joi.string().required(),
        zip:Joi.number().required(),
        phone:Joi.number().required(),
    })
    // schema options
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    // validate request body against schema
    const { error, value } = schema.validate(req.body, options);
    
    if (error) {
        req.flash('error',error.details[0].message);
        return res.redirect("/customer/checkout");
        
    } else {
        next();
    };
};
 module.exports = checkoutValidation; 
    
    

