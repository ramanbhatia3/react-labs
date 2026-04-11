import { useRef, useState } from 'react'
import './App.css'

// useRef - reference to a value, such that when you use the value, the component DOES NOT re-render

function App() {
  // Step 1: Create a ref to store the input element
  const inputRef = useRef();

  // Step 2: Define the function to focus the input
  function focusOnInput() {
    // document.getElementById("name").focus()

    // Step 3: Access the DOM node and call the focus method
    inputRef.current.focus()
  }

  return <div>
    Sign Up
    {/* Attach the ref to the input element */}
    <input ref={inputRef} id='name' type="text" placeholder='Name' />
    <input type="text" placeholder='Roll No.' />
    <button onClick={focusOnInput}>Submit</button>
  </div>
}

export default App
