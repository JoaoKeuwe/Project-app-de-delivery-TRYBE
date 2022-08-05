const loginService = require('../services/user.services');

const login = async (req, res) => {
  try {
    const user = await loginService.login(req.body);
    const token = await loginService.createToken(req.body);
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const newUser = await loginService.register(req.body);  
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

module.exports = {
  login,
  register,
};
