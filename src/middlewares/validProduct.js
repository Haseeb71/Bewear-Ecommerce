const Joi = require("joi");


const productValidation = function(req, res, next) {

    const schema = Joi.object({
        name:Joi.string().required(),
        price:Joi.number().required(),
        description:Joi.string().required(),
        stock:Joi.number().required(),
        sStatus:Joi.string().required(),
        status:Joi.string().required(),
        featured:Joi.string().optional(),
        brands:Joi.string().required(),
        category: Joi.any().required(),
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
        return res.redirect("/addProduct");
        
    } else {
        next();
    };
};
 module.exports = productValidation; 
    
    

