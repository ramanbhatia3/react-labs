// useFetch

import React, { useEffect, useState } from 'react'
import { usePostTitle, useFetch} from './hooks/useFetch'

const App = () => {
    // const fetchedPost = usePostTitle()

    const [currentPost, setCurrentPost] = useState(1)

    const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost)

    if (loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <button onClick={() => setCurrentPost(1)}>1</button>
            <button onClick={() => setCurrentPost(2)}>2</button>
            <button onClick={() => setCurrentPost(3)}>3</button>

            <br />
            <br />

            {JSON.stringify(finalData)}

            <br />
            <br />

            {finalData.title}
        </div>
    )
}

export default App
