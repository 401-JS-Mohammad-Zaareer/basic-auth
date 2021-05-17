'use strict';

// 3rd Part Resources
require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server.js');

// Environment variables
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    server.run(PORT);
}).catch(e => console.error('Could not start server', e.message));