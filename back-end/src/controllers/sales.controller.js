const saleServices = require('../services/sales.services');

const getSales = async (req, res) => {
  try {
    const sales = await saleServices.getSales();
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const createSale = async (req, res) => {
  try {
    const sales = await saleServices.createSale(req.body);
    return res.status(201).json(sales);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getSalesProducts = async (req, res) => {
  try {
    const sales = await saleServices.getSalesProducts();
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
  
const createSaleProducts = async (req, res) => {
  try {
    const sales = await saleServices.createSaleProducts(req.body);
    return res.status(201).json(sales);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getSales,
  createSale,
  createSaleProducts,
  getSalesProducts,
};
