import React from "react";
import {RecoilRoot, atom, useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil"

// Using React 18 and React DOM 18 because Recoil (v0.7.7) is not fully compatible with React 19

const count = atom({
  key: 'countState', // unique ID (wrt other atoms / selectors)
  default: 0 // default / initial value
})

function Parent(){
    return (
        <RecoilRoot>
            <Increase />
            <Decrease />
            <Value />
        </RecoilRoot>
    )
}

function Decrease(){
    const setCount = useSetRecoilState(count)

    return <button onClick={() => setCount(count => count-1)}>Decrease</button>
}

function Increase(){
    const setCount = useSetRecoilState(count)

    return <button onClick={() => setCount(count => count+1)}>Increase</button>
}

function Value(){
    const countValue = useRecoilValue(count)

    return <p>Count: {countValue}</p>
}

const App = () => {
    return <div>
        <Parent />
    </div>
}

export default App;