const express = require("express");
const path = require("path");
const colors = require("colors");

const app = express();

const production = true
const host = production ? 'https://benion-tech-server.herokuapp.com' : 'http://localhost:88288'
console.log(host)

// Use Static Folder
 app.use(express.static("public"));
 app.get("*", (request, response) => response.sendFile(path.resolve(__dirname, "public", "index.html")));

const PORT = process.env.PORT || 8888;

app.listen(PORT, console.log(`Benion Server Started: Running On Port ${ PORT }`.yellow.bold));