const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();


router.get('/', async(req, res) => {
    const todos = await Todo.find({userId: req.userId});
    res.json(todos);

});

router.post('/', async (req, res) => {
    const {task} = req.body;
    const todo = await Todo.create({userId : req.userId , task, completed : false});
    res.json(todo);
})

router.put('/:id', async (req, res) => {
    const {task, completed} = req.body;
    const todo = await Todo.findByIdAndUpdate(req.params.id, {task, completed}, {new: true});

    res.json(todo);
})

router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({success: true});
})




module.exports = router;