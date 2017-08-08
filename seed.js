const models = require("./models");

models.todo.bulkCreate([{
    todolistitem: 'Wake up.',
    complete: true,
    createdAt: date(),
    updatedAt: date()
  },
  {
    todolistitem: 'Eat breakfast',
    complete: true,
    createdAt: date(),
    updatedAt: date()
  }, {
    todolistitem: 'Get on the metro',
    complete: true,
    createdAt: date(),
    updatedAt: date()
  }])
    .then(function() {
      return todo.findAll();
    }).then(function(todo) {
      console.log(todo);
    })
