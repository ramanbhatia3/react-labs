import { useState } from 'react'

function LinkedIn() {
    const [count, setCount] = useState(1)

    function increaseCount(){
      setCount(count + 1);
    }

    
  return (
    <div>
      <div style={{display: "flex"}}>
        <div style={{backgroundColor: "red",color: "white", borderRadius: 50, marginLeft: 25, width: 20, textAlign: "center"}}>{count}</div>
      </div>
        
        <img src="https://icons.veryicon.com/png/o/miscellaneous/fine-fillet-icon/notification-bell.png" alt="" style={{width: 40, cursor: 'pointer'}}/>

        <button onClick = {increaseCount}>Increase the count</button>
    </div>
  )
}


export default LinkedIn