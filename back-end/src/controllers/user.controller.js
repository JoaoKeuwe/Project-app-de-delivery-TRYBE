const loginService = require('../services/user.services');

const login = async (req, res) => {
  try {
    const user = await loginService.userValid(req.body);
    if (!user) return res.status(404).json({ message: 'Not Found' });
 
    const token = await loginService.createToken(req.body);

    return res.status(200).json({ user, token }); 
  } catch (error) {
    return res.status(400).json({ message: error.message }); 
  }
};

const register = async (req, res) => {
  try {
    const exist = await loginService.userValid(req.body);
    if (exist) return res.status(400).json({ message: 'user alredy exists' });
  
    const newUser = await loginService.register(req.body);
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  login,
  register,
};
