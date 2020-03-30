var login = require("express").Router();
var client = require("../config/config");

login.post("/", async (req, res) => {
    console.log(req.body)
  await client.query(
    `SELECT * FROM details
        WHERE username='${req.body.username}'
        AND password='${req.body.password}';
        `
  ).then(data=>{
      console.log(data)
      if(data.rowCount){
          res.send({data:"loggedin"})
      }
      else{
          res.send({data:"logged"})
      }
  }).catch(err=>{
    // res.send(err)
  });
//   res.send({ status: "done" });
  
});

module.exports = login;
