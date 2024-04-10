/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { name: 'Квартира', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Дом', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Комната', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
