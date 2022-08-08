const jwt = require('jsonwebtoken');
const fs = require('fs');

const login = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) return res.status(400).json('invalid email');
  if (password.length < 6) return res.status(400).json('invalid password');
  next();
};

const register = (req, res, next) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const { name, email, password } = req.body;
  if (name.length < 12) return res.status(400).json('invalid name');
  if (!emailRegex.test(email)) return res.status(400).json('invalid email');
  if (password.length < 6) return res.status(400).json('invalid password');
  next();
};

const tokenAuthenticador = (req, res, next) => {
  const secret = fs.readFileSync('jwt.evaluation.key').toString();
  const { authorization } = req.headers;
    try {
      if (!authorization) return res.status(401).json({ message: 'token do not exist' });
      jwt.verify(authorization, secret);
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    next();
};

module.exports = {
  register,
  login,
  tokenAuthenticador,
};
