const loginService = require('../services/login.service');

const loginController = async (req, res) => {
  try {
    const user = await loginService.userValid(req.body);
    if (!user) return res.status(404).json({ message: 'Not Found' });
 
    const token = await loginService.createToken(req.body);

    return res.status(200).json({ user, token }); 
  } catch (error) {
    return res.status(400).json({ message: error.message }); 
  }
};

module.exports = loginController;
