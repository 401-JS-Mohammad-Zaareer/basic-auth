'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const userRoute = require('./auth/router.js')

// Prepare the express app
const app = express();

app.use(cors());
// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoute);
app.get('/', (req, res) => {
    res.send('Welcome to Home!');
})

function run(port) {
    app.listen(port, () => { console.log('server up') })
}

module.exports = {
    app,
    run
}