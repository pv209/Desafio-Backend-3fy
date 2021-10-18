const {
    StatusCodes: { BAD_REQUEST, CONFLICT },
  } = require('http-status-codes');
  const userSchema = require('../validateUser/validate');
  const userModel = require('../models/userModel');
  
  const commonUser = async (req, _res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) next({ message: 'Invalid entries. Try again.', statusCode: BAD_REQUEST });
    next();
  };
  
  module.exports = commonUser;