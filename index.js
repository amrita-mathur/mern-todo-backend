const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const port = process.env.PORT || 3001;


const cors = require('cors');

const app = express();

app.use(express.json());
try{
    mongoose.connect("mongodb+srv://amritamathur:admin@cluster0.7d4xbmx.mongodb.net/todos_db?retryWrites=true&w=majority", { useNewUrlParser: true });
    console.log("connected with db")
}catch(error){
    console.log(error);
}

require('./models/todoModel')
const todoRouter = require('./routes/todoRoutes');
app.use(cors());
app.use('/todos', todoRouter);
app.get('/', (req,res)=>{
    res.send("Connected to Todo App");
})


app.listen(port, ()=>{
    console.log("Server is running.")
})