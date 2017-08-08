const express = require("express");
const router = express.Router();
const models = require("../models/index");

router.get('/todos', function(req, res) {
  models.Todo.findAll()
    .then((todos) => {
    res.render("index", {todos : todos});
  });
});

router.post('/todos', (req, res) => {
  console.log(req.body);
  models.Todo.build({
    todoitem: req.body.title,
    complete: false,
    createdAt: Date(),
    updatedAt: Date()
  })
  .then(function(todo) {
    res.json(todo);
  });
});

module.exports = router;
