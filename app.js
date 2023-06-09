const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const PW = require("./models/pw");

const port = 3000;
require("./config/mongoose");

app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.render("index"));

app.post("/login", (req, res) => {
  if (!req.body.email || !req.body.password) return res.redirect("/");

  const { email, password } = req.body;
  PW.findOne({ email, password }).then((result) => {
    if (result) {
      res.render("sucess", { firstName: result.firstName });
    } else {
      res.render("error");
    }
  });
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
