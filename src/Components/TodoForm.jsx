import React, { useState } from "react";

function TodoForm(props) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addToList(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new to-do item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default TodoForm;
