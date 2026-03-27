import React from 'react'

function Count(){
  const [count, setCount] = React.useState(0)

  function onClickHandler(){
    setCount(count+1)
  }

  return (
    <div>
      <button onClick={onClickHandler}>Count: {count}</button>
    </div>
  )
}

export default Count