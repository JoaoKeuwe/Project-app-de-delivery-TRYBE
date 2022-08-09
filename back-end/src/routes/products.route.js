const express = require('express');

const router = express.Router();

// const mid = require('./middlewares/errors');

const { getProducts } = require('../controllers/products.controller');

router
  .get('/', getProducts);

module.exports = router;
