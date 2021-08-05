const express = require("express");
require("./src/config/sequelize");
const app = require("./src/app");
const port = process.env.PORT || 3006;

app.listen(port,() => { 

    console.log(`Server is running in port ${port} !`);
});



