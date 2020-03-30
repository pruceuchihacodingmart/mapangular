const {Client } = require("pg");

const connectionString =
  "postgressql://giphyuser:foxfire21@localhost:5432/userdetails";
  const client = new Client({
    connectionString: connectionString
  });
  
  client.connect();

  module.exports=client;