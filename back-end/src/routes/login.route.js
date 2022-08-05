const express = require('express');

const router = express.Router();

const mid = require('../middlewares/errors');
const { login } = require('../controllers/user.controller');

router
  .post('/', mid.login, login);

module.exports = router;
