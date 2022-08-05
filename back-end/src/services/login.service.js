const jwt = require('jsonwebtoken');
const fs = require('fs');
const md5 = require('md5');
const { User } = require('../database/models');

const userValid = async ({ email, password }) => {
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) throw new Error('Invalid Email');
  if (password.length < 6) throw new Error('Invalid Passord');

  const user = await User.findOne({
    where: { email, password: md5(password) },
    attributes: { exclude: ['password'] },
  });

  return user;
};

const createToken = async ({ email, password }) => {
  const jwtConfig = {
    algorithm: 'HS256',
  };

  const secret = fs.readFileSync('jwt.evaluation.key').toString();
  const token = jwt.sign({ data: { email, password } }, secret, jwtConfig);
  return token;
};

module.exports = {
  userValid,
  createToken,
};
