const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mustacheExpress = require("mustache-express");
const expressValidator = require("express-validator");


app.use(expressValidator());
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache")

app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({extended: false}));

app.use(require("./routes/index"));

app.listen(8080, () => {
  console.log("Node running successfully at http://localhost:8080");
});
