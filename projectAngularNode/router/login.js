var route = require("express").Router();
route.use("/details", require("../controller/login"));

module.exports = route;
