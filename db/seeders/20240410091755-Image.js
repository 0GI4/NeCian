/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        photo: 'http://localhost:5000/img/image1.jpg',
        adsId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'image2.jpg',
        adsId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'image3.jpg',
        adsId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'image4.jpg',
        adsId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'image5.jpg',
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
