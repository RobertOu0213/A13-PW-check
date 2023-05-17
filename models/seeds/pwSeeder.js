const mongoose = require("mongoose");
const PW = require("../pw");
const pwList = require("../../user.json");
const db = require("../../config/mongoose");

db.once("open", () => {
  console.log("running restaurantSeeder script");

  PW.create(pwList).then(() => {
    console.log("restaurantSeeder Done");
    db.close();
  });
});
