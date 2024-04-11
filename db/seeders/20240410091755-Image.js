/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        photo: '/img/image1.jpg',
        adsId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: '/img/image2.jpg',
        adsId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: '/img/image3.jpg',
        adsId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: '/img/image4.jpg',
        adsId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: '/img/image5.jpg',
        adsId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Images', null, {});
  },
};
