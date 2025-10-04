import mongoose from "mongoose";  
import Express from "express";
import { Todo } from "./models/Todo.js"; 

await mongoose.connect("mongodb://localhost:27017/Todo")

const app = Express()
const port = 3000

app.get('/', (req, res) => {
  const todo = new Todo({title: "HEy is this my first todo", desc: "Descriptiion of todo", isDone: false});
  todo.save();
  res.send('Hello World!')
})
app.get('/a', async (req, res) => {
  let todo= await Todo.findOne({})
  console.log(todo)
  res.json({title: todo.title, desc: todo.desc, isDone: todo.isDone })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
