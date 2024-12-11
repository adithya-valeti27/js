import React, { useState, useRef } from 'react';

const UseRefComponent = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  async function getData() {
    const num = inputRef.current.value;

    if (num === "") {
      alert("Please enter a number");
      setTodos([]);
      return;
    }

    try {
      const url = `https://jsonplaceholder.typicode.com/todos/${num}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setTodos([data]);
      } else {
        setTodos([]);
      }
    } catch (error) {
      console.error("Error fetching the data", error);
      setTodos([]);
    }
  }

  return (
    <div>
      <input type="text" placeholder="enter a number" ref={inputRef} onKeyDown={()=>getData()} />
      <button onClick={getData}>submit</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseRefComponent;
