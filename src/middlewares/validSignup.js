const Joi = require("joi");

const signUpValidation = function(req, res, next) {

    const schema = Joi.object({
        fname:Joi.string().required(),
        lname:Joi.string().required(),
        email:Joi.string().email().required(),
        password: Joi.string().min(6).max(15).required()
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
        return res.redirect("/customer/signup");
        
    } else {
        next();
    };
};
 module.exports = signUpValidation; 
    
    

