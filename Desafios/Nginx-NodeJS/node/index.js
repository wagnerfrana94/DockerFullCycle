const express = require("express");
const app = express();
const faker = require('faker');

const mysql = require('mysql');

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

let connection = mysql.createConnection(config);
let sql = "CREATE TABLE IF NOT EXISTS people (name VARCHAR(255))";
connection.query(sql);

app.get('/', async (req, res) => {
    const peopleName = faker.name.findName();

    let sql = `INSERT INTO people(name) values('${peopleName}')`;
    connection.query(sql);

    connection.query(`SELECT name FROM people`, (error, results) => {
        res.send(`
            <h1>Full Cycle Rocks!</h1>
            <ol>
                ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
            </ol>
        `)
    });
});

app.listen(8000, () => {
   console.log("Rodando!");
});