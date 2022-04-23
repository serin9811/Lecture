const mysql = require("mysql");
const { DB_SCHEMA, DB_HOST, DB_USER, DB_PASSWORD } = process.env;

let connection = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_SCHEMA,
});

module.exports = connection;
