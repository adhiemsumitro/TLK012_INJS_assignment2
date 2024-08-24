// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };

'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'User One',
        username: 'userone',
        email: 'userone@example.com',
        password: await bcrypt.hash('password123', 10),
        phoneNumber: '1234567890',
        address: '123 Main St',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'User Two',
        username: 'usertwo',
        email: 'usertwo@example.com',
        password: await bcrypt.hash('password123', 10),
        phoneNumber: '0987654321',
        address: '456 Elm St',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more users as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
