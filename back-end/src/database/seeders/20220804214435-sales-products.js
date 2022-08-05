'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales_products', [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 10
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales_products', null, {});
  }
};
