const Joi = require('joi');

const userValidate = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    birthdate: Joi.string().required(),
    addresses: Joi.array(),
    }); 





module.exports =  userValidate;