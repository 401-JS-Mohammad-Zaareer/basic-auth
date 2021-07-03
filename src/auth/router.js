'use strict';

const express = require('express');
const basicAuth = require('./middleware/basic.js');
const router = express.Router();

const Users = require('./models/user.js');
const ToDoItems = require('./models/todo-item');
const Categories = require('./models/category');
const Products = require('./models/product');

router.post('/signup', async(req, res) => {
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(201).json(record);
});

router.post('/signin', basicAuth, (req, res) => {
    res.status(200).json(req.credentials);
});

router.get('/categories', async(req, res) => {
    const allCategories = await Categories.find({});
    res,status(200).json(allCategories);
});

router.post('/categories', async(req, res) => {
    const category = new Categories(req.body);
    const result = await category.save(req.body);
    res.status(201).json(result);
});

router.get('/products', async(req, res) => {
    const allProducts = await Products.find({});
    res,status(200).json(allProducts);
});

router.post('/products', async(req, res) => {
    const product = new Products(req.body);
    const result = await product.save(req.body);
    res.status(201).json(result);
});

router.get('/todo', async(req, res) => {
    const allTasks = await ToDoItems.find({});
    res.status(200).json(allTasks);
});

router.post('/todo', async(req, res) => {
    const todoItem = new ToDoItems(req.body);
    const result = await todoItem.save(req.body);
    res.status(201).json(result);
});

router.put('/todo/:id', async(req, res) => {
     const id = req.params.id;
     const result = await ToDoItems.findByIdAndUpdate(id, req.body, {
        new: true
    });
     res.status(200).json(result);
});
router.delete('/todo/:id', async(req, res) => {
     const id = req.params.id;
     const result = await ToDoItems.findByIdAndDelete(id);
     res.status(200).json(result);
});


module.exports = router;