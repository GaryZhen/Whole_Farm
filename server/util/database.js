const mysql = require("mysql");

// db connection
const database = mysql.createConnection({
  user: "titan",
  host: "localhost",
  password: "15170056808qz",
  database: "whole_farm",
});

module.exports = database;
