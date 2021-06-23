'use strict';
const mongoose = require('mongoose');

// Create a mongoose model
const todoItemSchema = mongoose.Schema({
    complete: { type: Boolean, default: false },
    text: { type: String, required: true},
    difficulty: {type: Number, required: true},
    assignee: {type: String, required: true}
});

const ToDoItems = mongoose.model('ToDoItems', todoItemSchema);

module.exports = ToDoItems;