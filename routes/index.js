const express = require("express");
const router = express.Router();
const models = require("../models/index");
const todos = require("../models/todos");

router.get('/', (req, res) => {
  models.todos.findAll()
    .then((todos) => {
    res.render("index", {todos : todos});
  });
});

router.post('/', (req, res) => {
  // req.body = { button: '', toDoAdd: 'Walk the dog' }
  console.log(req.body);
  models.todos.create({
    todoitem: req.body.toDoAdd,
    complete: false,
    createdAt: Date(),
    updatedAt: Date()
  })
  res.render("index", { todos : req.body });
});



  // res.redirect('/');
  // .then(function(todos) {
    // res.render(req.body.title);

  // models.todo.findById(req.params.id)
  // res.render("index", { toDoList : req.body.title });
  // router.get("/:id", (req, res) => {
  //   models.todo.findById(req.params.id)
  //   .then(todo => {
  //     res.render("todos", { todo: todo });
  //   });
  // })

// router.post('/:id', (req, res))

module.exports = router;
