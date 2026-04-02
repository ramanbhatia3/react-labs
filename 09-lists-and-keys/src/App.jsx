import { useState } from 'react'


function App() {
  const todos = [{
    title: "Go to gym",
    done: false
  },{
    title: "Eat food",
    done: true
  }]

  const todosComponent = todos.map(todo => <Todo title={todo.title} done={todo.done} />)

  return (
    <div>
      {todosComponent}
    </div>
  )
}

function Todo({ title, done }){
  return <div>
    {title} - {done? "done" : "not done!"}
  </div>
}

export default App
