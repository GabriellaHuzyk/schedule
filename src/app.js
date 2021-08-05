const express = require("express");
const app = express(); 

const contactRoute = require("./config/routes");

app.use(express.json());
app.use(contactRoute);
console.log("app running!"); 

module.exports = app;
