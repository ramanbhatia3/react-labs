import { useState, useEffect } from 'react'

function TodoApp() {
    const [currentTab, setCurrentTab] = useState(1)
    const [todoData, setTodoData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(function(){
        setLoading(true)
        // send a backend request to get data for this tab
        console.log("sent request to backend to get data for Todo: " + currentTab)

        fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
            .then(async res => {
                const json = await res.json()
                setTodoData(json)
                setLoading(false)
            })
    }, [currentTab])

    return (
        <div>
            <button onClick={() => {setCurrentTab(1)}} style={{color: currentTab == 1? "red":"black"}}>Todo #1</button>
            <button onClick={() => {setCurrentTab(2)}} style={{color: currentTab == 2? "red":"black"}}>Todo #2</button>
            <button onClick={() => {setCurrentTab(3)}} style={{color: currentTab == 3? "red":"black"}}>Todo #3</button>
            <button onClick={() => {setCurrentTab(4)}} style={{color: currentTab == 4? "red":"black"}}>Todo #4</button>

            <div>
                Todo Title : {loading? "Loading..." : todoData.title}
            </div>
            
        </div>
    )
}


export default TodoApp