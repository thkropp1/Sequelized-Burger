// Dependencies
// =============================================================

var express = require("express");

var router = express.Router();

// Requiring our models
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

// load the main html page
router.get("/", function(req, res) {
  res.redirect("/burgers");
});


// GET route for getting all of the burgers
router.get("/burgers", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.burger.findAll({}).then(function(data) {
    //console.log(data);
    // We have access to the burger as an argument inside of the callback function
    var hbsObject = {
      burgers: data
    };
    return res.render("index", hbsObject);
  });
});


// POST route - Create the new burger name, and set the devoured flag to false(the burger has not been eaten)
router.post("/", function(req, res) {
  console.log("Burger name: " + res.burger_name);
  db.burger.create({
    burger_name: req.body.burger_name,
    devoured: false
  }).then(function(data) {
    res.redirect("/");
  });
});


// UPDATE route - Mark the devoured flag as true(the burger has been eatened).
router.put("/:id", function(req, res) {
  db.burger.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
