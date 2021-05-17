'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create a mongoose model
const usersSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

usersSchema.pre("save", async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

// usersSchema.methods.authenticate = async function(candidatePassword) {
//     const valid = await bcrypt.compare(candidatePassword, user.password);
// }

const Users = mongoose.model('users', usersSchema);

module.exports = Users;