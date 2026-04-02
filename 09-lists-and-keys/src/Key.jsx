import { useState } from 'react'


function Key() {

  return (
    <div>
      <Todo key={1} title={"Go to Gym"} done={false} />
      <Todo key={2} title={"Eat Food"} done={true} />
    </div>
  )
}

function Todo({ title, done }){
  return <div>
    {title} - {done? "done" : "not done!"}
  </div>
}

export default Key
