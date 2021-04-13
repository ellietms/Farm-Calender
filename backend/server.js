const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongodb = require("mongodb");
const nodemailer = require("nodemailer");

const app = express();

// view engine setup
app.engine('handlbars',exphbs);
app.set('view engine', 'handlebars');



app.get("/info",(req,res) => {
    res.send("I am working :P ");
})

app.post("/user-info",(req,res) => {
    console.log("ELLIIEEEE");
})



app.listen(3001, () => console.log("It is starting ..."));