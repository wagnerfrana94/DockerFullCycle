const express = require("express");
const app = express();

const mysql = require('mysql');

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Wagner')`;

connection.query(sql);
connection.end();

app.get('/', (req, res) => {
    res.json({curso: 'Full Cycle!!!'});
});

app.listen(3000, () => {
   console.log("Rodando!");
});