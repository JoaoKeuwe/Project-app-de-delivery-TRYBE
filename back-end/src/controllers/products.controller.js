const productsServices = require('../services/products.services');

const getProducts = async (req, res) => {
  try {
    const products = await productsServices.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
};
