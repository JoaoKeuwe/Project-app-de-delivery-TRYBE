const express = require('express');

const router = express.Router();

// const mid = require('../middlewares/errors');
const { register } = require('../controllers/user.controller');

router
  .post('/', register);

module.exports = router;