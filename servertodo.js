
const express = require("express");
const connectdb = require("./db");
connectdb();
const connectTodo = require("./todoschema");
const app = express();
const PORT = 3000;
app.use(express.json());
const todos =[
  {
    "id": 1,
    "title": "Buy groceries",
    "completed": false

  },
  {
    "id": 2,
    "title": "Finish project report",
    "completed": true
  },
  {
    "id": 3,
    "title": "Book dentist appointment",
    "completed": false
  },
  {
    "id": 4,
    "title": "Pay electricity bill",
    "completed": true
  },
  {
    "id": 5,
    "title": "Clean the living room",
    "completed": false
  },
  {
    "id": 6,
    "title": "Prepare for presentation",
    "completed": false
  },
  {
    "id": 7,
    "title": "Read a chapter of a book",
    "completed": true
  },
  {
    "id": 8,
    "title": "Go for evening walk",
    "completed": false
  },
  {
    "id": 9,
    "title": "Fix broken chair",
    "completed": false
  },
  {
    "id": 10,
    "title": "Call insurance agent",
    "completed": true
  }
];

app.get('/todos', async(req,res) => {
  const todo =  await connectTodo.find();
    res.json(todo);
        
    });

app.put("/todo/:taskId",(req,res) => {
  const taskId = parseInt(req.params.taskId);
  let todo = todos.find((t) => t.id == taskId);
  console.log(todo,taskId);
})

app.post("/todo", async(req,res) => {
  const newtodo = await connectTodo.create(req.body)
  res.status(201).json({
    message : "Todo created sucessfully",
    data: newtodo
  });
});



app.listen(PORT,() => {
    console.log(`server running on the port ${PORT}`)
})