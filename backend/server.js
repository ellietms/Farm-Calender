require("dotenv").config();
const mongodb = require("mongodb");
const express = require('express');
const bodyParser = require('body-parser');
const uri = process.env.DATABASE_URI;
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/farm-calender",(req,res) => {
   res.send("Farm Ellie");
})

app.get("/farm-calender/booking",(req,res) => {
    res.send("Hellllooooo ELLIIEEEE");
})


app.listen(PORT, () => console.log("It is starting ..."));