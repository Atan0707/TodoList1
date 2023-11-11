import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function add(e) {
    setTodos([...todos, { text: text, completed: false }]); // Modified to store an object with text and completion status
  }

  function handleOnChange(e) {
    setText(e.target.value);
  }

  function remove(index) {
    let newArray = todos.filter((el, i) => i !== index);
    setTodos(newArray);
  }

  function toggleComplete(index) {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed }; // Toggle the completed status
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todos.map((data, index) => (
          <li key={index} style={{ textDecoration: data.completed ? "line-through" : "none" }}>
            {data.text}
            <button onClick={() => remove(index)}>-</button>
            <button onClick={() => toggleComplete(index)}>
              {data.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
      <input onChange={handleOnChange} />
      <button onClick={add}>Add</button>
    </div>
  );
}
