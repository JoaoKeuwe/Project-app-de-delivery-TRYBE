'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [{
      user_id: 3,
      seller_id: 2,
      total_price: 7.50,
      delivery_address: 'rua carapibas',
      delivery_number: '4002-8922',
      sale_date: '21/10/15',
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
