const mongodb = require("mongodb");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/info",(req,res) => {
    res.send("I am working :P ");
})

app.get("/user-info",(req,res) => {
    console.log("Hellllooooo ELLIIEEEE");
})


app.listen(PORT, () => console.log("It is starting ..."));