import React from 'react'

function App() {
  const [todos, setTodos] = React.useState([{
    title: "Go to gym",
    description: "Hit the gym regularly",
    done: false
  }])

  function addTodo() {
    let newArr = [...todos]
    newArr.push({
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      done: false
    })
    setTodos(newArr)
  }

  return (
    <div>
      <input id='title' type="text" placeholder="Title" />
      <br />
      <input id='description' type="text" placeholder="Description" />
      <br />
      <button onClick={addTodo}>Add a todo</button>
      <br />
      {/* {JSON.stringify(todos)} */}
      {/* <Todo title = {"Go to gym"} description = {"Hit the gym regularly"} done = {false} /> */}
      {todos.map(todo => (
        <Todo 
          title={todo.title} 
          description={todo.description} 
          done={todo.done} 
        />
      ))}
    </div>
  )
}

export default App

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <h3>{props.done ? "Task is done" : "Task is not done"}</h3>
  </div>
}