const jwt = require('jsonwebtoken');
const fs = require('fs');
const md5 = require('md5');
const { User } = require('../database/models');

const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password: md5(password) },
    attributes: { exclude: ['password'] },
  });

  if (!user) throw new Error('email or password not found');

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

const register = async ({ name, role = '', email, password }) => {
  const userEmail = await User.findOne({ where: { email } });
  if (userEmail) throw new Error('email exists');

  const userName = await User.findOne({ where: { name } });
  if (userName) throw new Error('name exists');

  const newUser = await User.create({ name, role, email, password: md5(password) });
  return newUser; 
};

module.exports = {
  login,
  createToken,
  register,
};
