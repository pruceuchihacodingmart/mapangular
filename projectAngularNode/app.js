const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var client = require("./config/config");

const app = express();
  
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3006, () => {
  console.log("port 3006 started");
});

app.use("/signup", require("./router/signup"));


app.use("/login",require("./router/login"));  

// app.use("/list",require("./router/lists"));
