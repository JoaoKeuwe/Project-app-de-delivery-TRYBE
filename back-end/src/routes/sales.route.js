const express = require('express');

const router = express.Router();

const mid = require('./middlewares/errors');
const {
  getSales,
  createSale,
  createSaleProducts,
  getSalesProducts,
} = require('../controllers/sales.controller');

router
  .get('/', getSales)
  .post('/', mid.tokenAuthenticador, createSale)
  .post('/products', mid.tokenAuthenticador, createSaleProducts)
  .get('/products', getSalesProducts);

module.exports = router;