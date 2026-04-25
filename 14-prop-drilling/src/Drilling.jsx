// prop drilling occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tag. This often leads to the following issues:

// Complexity: You may have to pass props through many intermediate components that don't use the props themselves, just to get them to the component that needs them.

// Maintenance: It can make the code harder to maintain, as changes in the props structure require updates in multiple components


import { useState } from 'react'

function App() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>
    <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function Light({bulbOn, setBulbOn}){

  return <div>
    <LightBulb bulbOn={bulbOn}/>
    <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function LightBulb({bulbOn}){
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function LightSwitch({bulbOn, setBulbOn}){
  function toggle() {
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle the Bulb</button>
  </div>
}


export default App