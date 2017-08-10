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

router.post("/:id/delete", (req, res) => {
  models.todos.findById(parseInt(req.params.id)).then(todo => {
    todo.destroy({ force : true }).then(todo => {
      res.redirect("/");
    })
  })
});

router.post("/:id/complete", (req, res) => {
  models.todos.findById(parseInt(req.params.id)).then(todo => {
    todo.update({ complete : true }).then(todo => {
      res.redirect("/")
    })
  })
});

router.post("/:id/redo", (req, res) => {
  models.todos.findById(parseInt(req.params.id)).then(todo => {
    todo.update({ complete : false }).then(todo => {
      res.redirect("/")
    })
  })
});

router.get("/:id/update", (req, res) => {
  console.log(req.params.id);
  models.todos.findById(req.params.id).then(todo => {
    console.log(todo);
      res.render("update", todo.dataValues);
  })
})

router.post("/:id/update", (req, res) => {
  models.todos.findById(req.params.id).then(todo => {
    console.log(req.params.id);
    todo.update({ todoitem : req.body.updateTodo }).then(todo => {
      console.log(req.body.updateTodo);
      res.redirect("/")
    })
  })
})

module.exports = router;
