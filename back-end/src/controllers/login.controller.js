const loginService = require('../services/login.service');

const loginController = async (req, res) => {
  try {
    const user = await loginService.authUser(req.body.email);
    if (!user) return res.status(400).json({ message: 'Invalid fields' });
    const token = await loginService.createToken(req.body);
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = loginController;
