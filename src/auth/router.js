'use strict';

const express = require('express');
const basicAuth = require('./middleware/basic.js');
const router = express.Router();

const Users = require('./models/user.js');

router.post('/signup', async(req, res) => {
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(201).json(record);
});

router.post('/signin', basicAuth, (req, res) => {
    res.status(200).json(req.credentials);
});
module.exports = router;