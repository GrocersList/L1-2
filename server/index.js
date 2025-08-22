const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser middleware
app.use(express.json());

// CORS configuration
app.use(cors());

// Mock database with intentional bugs
let todos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build API", completed: true },
  { id: 3, text: "Deploy app", completed: false },
];

let nextId = 4;

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Add new todo
app.post("/api/todos", (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).json({ error: "Todo text is required" });
  }

  const newTodo = {
    id: nextId++,
    text: text.trim(),
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Toggle todo completion
app.patch("/api/todos/:id/toggle", (req, res) => {
  const { id } = req.params;

  const todo = todos.find((t) => t.id == id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todo.completed = !todo.completed;
  res.json(todo);
});

// Delete todo
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  const todoIndex = todos.findIndex((t) => t.id === parseInt(id));

  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(todoIndex, 1);
  res.status(204).send();
});

// TODO: Implement update endpoint
// app.put('/api/todos/:id', ...)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Todo API: http://localhost:${PORT}/api/todos`);
  console.log(`🔍 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
