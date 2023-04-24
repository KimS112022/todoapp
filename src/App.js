import React, { useState } from "react";
import TodoForm from "./Components/TodoForm.jsx";
import TodoList from "./Components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const addToList = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <TodoForm addToList={addToList} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
