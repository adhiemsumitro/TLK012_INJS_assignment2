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

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'Inception',
        synopsis: 'A mind-bending thriller by Christopher Nolan.',
        trailerUrl: 'http://example.com/trailer/inception',
        imgUrl: 'http://example.com/image/inception.jpg',
        rating: 9,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Matrix',
        synopsis: 'A computer hacker learns about the true nature of his reality.',
        trailerUrl: 'http://example.com/trailer/matrix',
        imgUrl: 'http://example.com/image/matrix.jpg',
        rating: 8,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more movies as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
