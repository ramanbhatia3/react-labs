import { useState, useEffect } from 'react'

const Watch = () => {
  const [count, setCount] = useState(0);


useEffect(function(){
  setInterval(() => {
    setCount(count => count + 1)
    // setCount(function(count){
    //   return(count+1)
    // })
  }, 1000);  
},[])

  return (
    <div>
      <h1>Watch: {count}</h1>
    </div>
  )
}


export default Watch