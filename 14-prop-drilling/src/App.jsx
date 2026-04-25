import { useState } from 'react'

function App() {
  return <div>
    <LightBulb />
  </div>
}

function LightBulb(){
  const [bulbOn, setBulbOn] = useState(true)
  let a = 10

  // bulbOn is a prop to the BulbState component
  // bulbOn, setBulbOn are the props to the ToggleBulbState component
  return <div>
    <BulbState bulbOn={bulbOn} a={a}/>
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function BulbState({bulbOn, a}){
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"} {a}
  </div>
}

function ToggleBulbState({bulbOn, setBulbOn}){
  function toggle() {
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle the Bulb</button>
  </div>
}


export default App