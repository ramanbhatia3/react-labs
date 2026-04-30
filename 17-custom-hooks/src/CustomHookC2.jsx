import { useEffect, useState } from 'react'
import { useDebounce } from './hooks/useDebounce2'


function App(){
    const [inputValue, setInputValue] = useState("")

    const debouncedValue = useDebounce(inputValue, 200)

    function change(e){
        setInputValue(e.target.value)
        // setInputValue(document.getElementById("input").input)
    }

    useEffect(() => {
        // expensive operation
        // fetch
        console.log('expensive operation')
    }, [debouncedValue])


    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <input id="input" type="text" onChange={change} />
        </div>
    )
}

export default App