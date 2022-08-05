const express = require('express');

const router = express.Router();

const mid = require('../middlewares/errors');
const { register } = require('../controllers/user.controller');

router
  .post('/', mid.register, register);

module.exports = router;