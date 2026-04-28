import { useEffect, useState } from "react"

export function usePostTitle() {
    const [post, setPost] = useState({})

    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")

        const json = await response.json()

        setPost(json)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return post
}

export function useFetch(url){
    const [finalData, setFinalData] = useState({})
    const [loading, setLoading] = useState(true)

    async function getDetails() {
        setLoading(true)
        const res = await fetch(url)
        const json = await res.json()
        setFinalData(json)
        setLoading(false)
    }

    useEffect(() => {
      getDetails()
    }, [url])

    useEffect(() => {
        setInterval(getDetails, 10 * 1000);  // cleanup
    })
    
    return {
        finalData,
        loading
    }
}