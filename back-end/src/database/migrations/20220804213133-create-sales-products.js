'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      sale_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        refereces: { model: 'Sales', key: 'id' }
      },
      product_id: {
        type: Sequelize.INTEGER,
        refereces: { model: 'Products', key: 'id' }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};