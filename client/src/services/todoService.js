// API service for todos
const API_BASE = "/api";

const fetchTodos = async () => {
  try {
    const response = await fetch(`${API_BASE}/todos`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

const createTodo = async (text) => {
  try {
    const response = await fetch(`${API_BASE}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

const toggleTodo = async (id) => {
  try {
    const response = await fetch(`${API_BASE}/todos/${id}/toggle`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error toggling todo:", error);
    throw error;
  }
};

const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${API_BASE}/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};

// TODO: Implement updateTodo function
// const updateTodo = async (id, updates) => { ... }

export { fetchTodos, createTodo, toggleTodo, deleteTodo };
