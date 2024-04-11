/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashAdm = await bcryptjs.hash("admin123", 10);
    const hashUs1 = await bcryptjs.hash("user123", 10);
    const hashUs2 = await bcryptjs.hash("user456", 10);
    const hashUs3 = await bcryptjs.hash("user789", 10);
    const hashUs4 = await bcryptjs.hash("userabc", 10);

    await queryInterface.bulkInsert("Users", [
      {
        name: "Администратор",
        email: "admin@example.com",
        password: hashAdm,
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Пользователь1",
        email: "user1@example.com",
        password: hashUs1,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Пользователь2",
        email: "user2@example.com",
        password: hashUs2,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Пользователь3",
        email: "user3@example.com",
        password: hashUs3,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Пользователь4",
        email: "user4@example.com",
        password: hashUs4,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
