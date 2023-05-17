const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const PW = require("./models/pw");

const port = 3000;
require("./config/mongoose");

app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) =>
 res.render("index", { PW }));

 
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
