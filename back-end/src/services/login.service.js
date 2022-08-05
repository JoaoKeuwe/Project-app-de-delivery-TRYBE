const jwt = require('jsonwebtoken');
const fs = require('fs');
const { User } = require('../database/models');

const jwtConfig = {
  algorithm: 'HS256',
};

const authUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createToken = async ({ email, password }) => {
  const secret = fs.readFileSync('jwt.evaluation.key').toString();
  const token = jwt.sign({ data: { email, password } }, secret, jwtConfig);
  return token;
};

module.exports = {
  authUser,
  createToken,
};
