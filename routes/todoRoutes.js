const express = require('express');
const router = express.Router();

const Todo = require('../models/todoModel')

router.get('/', async (req, res) => {
    try{
        const todo = await Todo.find();
        res.status(200).json(todo);
    }catch(error){
        res.status(500).json({ error: 'Server Error' })
    }
})

router.post('/', async (req, res) => {
    try {
      const {id, title, description, completed} = req.body;
      const todo = new Todo({
        id,
        title,
        description,
        completed,
      });
      await todo.save();
      res.status(200).json({"message": todo});
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findById(id);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Todo.findByIdAndDelete(id);
      res.json({ message: 'Todo deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, completed } = req.body;
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { title, description, completed },
        {new: true}
      );
      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  });

module.exports = router;