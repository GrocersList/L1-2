import React from "react";

const TodoStats = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed === true).length;
  const pending = total - completed;

  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="todo-stats">
      <h3>📊 Todo Statistics</h3>
      <div>
        <p>Total: {total}</p>
        <p>Completed: {completed}</p>
        <p>Pending: {pending}</p>
        <p>Completion Rate: {completionRate}%</p>
      </div>
    </div>
  );
};

export default TodoStats;
