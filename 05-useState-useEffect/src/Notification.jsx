import { useState, useEffect } from 'react'

function Notification() {
    const [count, setCount] = useState(1)

    function increaseCount(){
    //   setCount(count + 1);

    setCount(prevCount => prevCount + 1)

    // setCount(function(currentValue){
    //     return currentValue + 1
    // })
    }

    // setInterval(increaseCount, 1000);

    useEffect(function(){
        setInterval(increaseCount, 1000)
    },[]) // this effect will run on mount, because the array is empty.

    // useEffect(function(){
    //     setInterval(increaseCount, 1000)
    // },[count])

    useEffect(function(){
        console.log("the count has been updated to " + count)
    },[count]) 

    
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


export default Notification