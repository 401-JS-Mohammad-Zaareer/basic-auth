'use strict';
const mongoose = require('mongoose');

// Create a mongoose model
const categorySchema = mongoose.Schema({
    normalizedName: { type: String, required: true},
    displayName: { type: String, required: true},
    description: {type: String, required: true}
});

const Categories = mongoose.model('Categories', categorySchema);

module.exports = Categories;