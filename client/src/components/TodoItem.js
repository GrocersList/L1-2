import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="todo-checkbox"
      />

      {/* BUG 3: Incorrect conditional rendering */}
      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>

      <div className="todo-actions">
        <button
          className="todo-button-small delete-button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
