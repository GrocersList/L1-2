import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoStats from "./components/TodoStats";
import {
  fetchTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
} from "./services/todoService";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTodos();
      setTodos(data);
    } catch (err) {
      setError("Failed to load todos");
      console.error("Error loading todos:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (text) => {
    try {
      setError(null);
      const newTodo = await createTodo(text);
      setTodos([newTodo]);
    } catch (err) {
      setError("Failed to add todo");
      console.error("Error adding todo:", err);
    }
  };

  const handleToggleTodo = async (id) => {
    try {
      setError(null);
      const updatedTodo = await toggleTodo(id);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (err) {
      setError("Failed to toggle todo");
      console.error("Error toggling todo:", err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      setError(null);
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError("Failed to delete todo");
      console.error("Error deleting todo:", err);
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="todo-app">
        <div className="todo-header">
          <h1>🐛 Todo App Bug Challenge</h1>
          <p>Find and fix all the bugs to make this app work!</p>
        </div>

        {error && <div className="error">{error}</div>}

        <TodoForm onAddTodo={handleAddTodo} />

        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />

        <TodoStats todos={todos} />
      </div>
    </div>
  );
}

export default App;
