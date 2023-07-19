const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const port = process.env.PORT || 3001;


const cors = require('cors');

const app = express();

app.use(express.json());
try{
    mongoose.connect(process.env.CONNECTION_STR, { useNewUrlParser: true });
    console.log("connected with db")
}catch(error){
    console.log(error);
}

require('./models/todoModel')
const todoRouter = require('./routes/todoRoutes');
app.use(cors());
app.use('https://todolistapp-yo5k.onrender.com/todos', todoRouter)


app.listen(port, ()=>{
    console.log("Server is running.")
})