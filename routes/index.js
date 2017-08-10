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
  console.log(req.body);
  models.todos.create({
    todoitem: req.body.toDoAdd,
    complete: false,
  })
  res.render("index", { todos : req.body });
});
//
router.post("/:id/delete", (req, res) => {
  models.todos.findById(parseInt(req.params.id)).then(todo => {
    todo.destroy({ force : true }).then(todo => {
      res.redirect("/");
    })
  })
});

router.post("/:id/complete", (req, res) => {
  // console.log("Reading here?", req.params.id);
  models.todos.findById(parseInt(req.params.id)).then(todo => {
    todo.update({ complete : true }).then(todo => {
      res.redirect("/")
    })
  })
});




// need to create a form (an additional view)
// router.post("/:id/update", (req, res) => {
//   models.todos.
//
// })

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
