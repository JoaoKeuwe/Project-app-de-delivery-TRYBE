const { Sales, SalesProducts } = require('../database/models');

const getSales = async () => {
  const sales = await Sales.findAll();
  return sales;
};

const getSalesProducts = async () => {
  const sales = await SalesProducts.findAll();
  return sales;
};

const createSale = async (sale) => {
  const {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = sale;
  const sales = await Sales.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
    status: 'Pendente',
   });

  return sales;
};

const createSaleProducts = async (products) => {
  for (let i = 0; i < products.length; i += 1) {
    const e = products[i];
    const { saleId, id: productId, qtd: quantity } = e;
    SalesProducts.create({ saleId, productId, quantity });
  }
};

module.exports = {
  getSales,
  createSale,
  createSaleProducts,
  getSalesProducts,
};
