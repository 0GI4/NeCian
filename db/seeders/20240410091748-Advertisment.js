/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Advertisments', [
      {
        categoryId: 1,
        price: 100000,
        description: 'доступна на сдачу квартира с двумя комнатами',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1,
        price: 300000,
        description: 'Последняя возможность снять прекрасную квартиру',
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
        description: 'Сдается трехкомнатная квартира в центре города',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        price: 250000,
        description: 'Сдается одноэтажный дом в лесу',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Advertisments', null, {});
  },
};
