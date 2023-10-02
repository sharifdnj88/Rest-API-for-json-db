const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const userRoute = require('./routes/userRouter');


// init environment variable
const PORT = process.env.PORT || 5000;

// express init
const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// api Router
app.use('/api/v1/user', userRoute);

// listen port
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgGreen.black);
});