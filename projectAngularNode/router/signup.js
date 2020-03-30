var route = require("express").Router();
route.use("/details", require("../controller/signup"));

module.exports = route;
