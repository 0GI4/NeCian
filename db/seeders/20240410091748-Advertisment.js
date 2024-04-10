/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Advertisments', [
      {
        categoryId: 1,
        price: 100000,
        description: 'Продается квартира с двумя комнатами',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        price: 300000,
        description: 'Продается дом с участком в пригороде',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3,
        price: 50000,
        description: 'Сдается комната в общежитии',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1,
        price: 150000,
        description: 'Продается трехкомнатная квартира в центре города',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        price: 250000,
        description: 'Продается одноэтажный дом в лесу',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Advertisments', null, {});
  },
};
