import { useState } from 'react'
import { usePrev } from './hooks/usePrev'


function App(){
    const [count, setCount] = useState(0)
    const prevCount = usePrev(count) // track the previous count value (0 -> 1 -> 2)

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Counter with usePrev hook</h1>
            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCount}</p>
            <button onClick={() => setCount(count+1)}>Increament</button>
            <button onClick={() => setCount(count-1)} style={{marginLeft: '10px'}}>Decreament</button>
        </div>
    )
}

export default App