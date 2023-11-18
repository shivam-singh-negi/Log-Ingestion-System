
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Import dotenv module

require("dotenv").config()

const app = express();
app.use(express.json());

const URI= process.env.DB_URI;

mongoose.connect(URI)
.then(()=>{console.log("Successfully connected with the MongoDb")})
.catch((error)=>{console.log("Something went wrong. Failed to connected with MongoDb ",error.message)});

app.get('/', (req, res) => {
    res.send('Hello from the backend 2!');
});

const port = process.env.PORT2 || 3001;
app.listen(port, () => {
    console.log(`Server2 is running on port ${port}`);
});

