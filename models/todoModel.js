const mongoose = require('mongoose');

// Todo Schema
const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

// Todo model
const Todo = mongoose.model('Todo', TodoSchema);


module.exports = Todo;