import { useDebounce } from './hooks/useDebounce'


function App(){
    function sendDataToBackend(){
        console.log('sending data')
        fetch('api.useDebounce/testing')
    }

    const debouncedFn = useDebounce(sendDataToBackend)

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <input type="text" onChange={debouncedFn} />
        </div>
    )
}


export default App