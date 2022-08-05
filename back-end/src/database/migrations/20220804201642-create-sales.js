'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        refereces: { model: 'Users', key: 'id' }
      },
      seller_id: {
        type: Sequelize.INTEGER,
        refereces: { model: 'Users', key: 'id' }
      },
      total_price: {
        type: Sequelize.DECIMAL
      },
      delivery_address: {
        type: Sequelize.STRING
      },
      delivery_number: {
        type: Sequelize.STRING
      },
      sale_date: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};