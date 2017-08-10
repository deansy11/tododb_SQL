"use strict"

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "todos",
      [{
          todoitem: 'Wake up',
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          todoitem: 'Eat breakfast',
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          todoitem: 'Get on the metro',
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("todos", null, {});
  }
};
