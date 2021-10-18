const { StatusCodes: { CREATED } } = require('http-status-codes');
const userService = require('../service/userService');

const createNewUser = async (req, res, next) => {
  try {
    const { firstName, lastName, birthdate, addresses } = req.body;
      const token = await userService({ firstName,lastName, birthdate, addresses });
      return res.status(CREATED).json(token);
  } catch (e) {
    next(e);
  }
};
module.exports = createNewUser;
