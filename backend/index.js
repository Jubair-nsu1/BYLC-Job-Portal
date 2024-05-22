const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')


//Files
const JobData = require('./models/jobData.model')
const connectDB = require('./config/db')

//Connection to Database
connectDB();


//Middleware
const app = express();
// app.use(express.urlencoded({ extended : false }) );
app.use(express.json());
// app.use(cors());


app.get("/", (req, res) => {
    res.send("I will be shown on the Browser");
    console.log("I will be shown on the Terminal");
});


app.listen(5000);