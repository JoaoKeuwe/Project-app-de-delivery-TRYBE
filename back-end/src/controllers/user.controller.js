const userServices = require('../services/user.services');

const login = async (req, res) => {
  try {
    const token = await userServices.createToken(req.body);
    const user = await userServices.login(req.body);
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
