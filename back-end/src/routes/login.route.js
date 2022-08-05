const express = require('express');

const router = express.Router();

const { login } = require('../controllers/user.controller');

router
  .post('/', login);

module.exports = router;
