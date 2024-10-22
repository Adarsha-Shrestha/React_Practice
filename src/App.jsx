import { useState } from "react";
// import './App.css';

function App(){
  const [todos, setTodos] = useState([{
    title: "Learn React",
    description: "Learn React from scratch",
    completed: false
  },{
    title: "Learn Node",
    description: "Learn Node from scratch",
    completed: false
  }]);

  function addTodo(){
    setTodos([...todos, {
      title: "Learn Express",
      description: "Learn Express from scratch",
      completed: false
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}/>
      })}  
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App;