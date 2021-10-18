require('dotenv').config();

const { sign } = require('jsonwebtoken');
const userModel = require('../models/userModel');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const create = async (data) => {
  const createdUser = await userModel.createUser(data);
  const token = sign({ data: createdUser }, JWT_SECRET, jwtConfig);
  return { token };
};



module.exports =  create ; 