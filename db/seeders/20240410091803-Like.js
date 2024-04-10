/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Likes', [
      {
        userId: 2,
        adsId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        adsId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        adsId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        adsId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        adsId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Likes', null, {});
  },
};
