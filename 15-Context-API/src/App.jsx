// The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components. 

// The Context API provides a way to share values (states, functions, etc.) between components without having to pass props doown manually at every level.

// Jargon
// Context: This is created using React.createContext(). It serves a container for the data you want to share.

// Provider: This component wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.

// Consumer: This component subscribes to context changes. It allows you to access the context value (using useContext hook)


import { useState, createContext, useContext } from 'react'

// Contexts are ideally stored in a seprate file
const BulbContext = createContext()

function App() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>
    <BulbContext.Provider value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn
    }}>
      <Light />
    </BulbContext.Provider>
  </div>
}

function Light() {

  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb() {
  const {bulbOn} = useContext(BulbContext)
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function LightSwitch() {
  const {bulbOn, setBulbOn} = useContext(BulbContext)

  function toggle() {
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle the Bulb</button>
  </div>
}


export default App