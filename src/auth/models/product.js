'use strict';
const mongoose = require('mongoose');

// Create a mongoose model
const productSchema = mongoose.Schema({
    category: { type: String, required: true},
    name: { type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    count: {type: Number, required: true},
    img: {type: String, required: true}
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;