var signup = require("express").Router();
var client = require("../config/config");

signup.post("/", async (req, res) => {

  await client.query(
    `insert into details (
        username,
        password,
        email
        )
         values(
        '${req.body.username}',
        '${req.body.password}',
        '${req.body.email}'
        )`
  );
  res.send({status:"done"})
// console.log(req.body)
});

module.exports = signup;