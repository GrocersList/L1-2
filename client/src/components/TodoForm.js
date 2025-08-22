import React, { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      onAddTodo(text);
      // TODO: Clear form after submission
      // setText('');
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="What needs to be done?"
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
