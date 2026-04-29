import { useRef, useEffect } from 'react'

export const usePrev = (value) => {
    const ref = useRef()

    console.log("re-render happened with the new value: " + value)

    // update the ref with the current value after each render
    useEffect(() => {
        console.log("updated the value of ref to: " + value)
        ref.current = value // 0 -> 1 -> 2
    }, [value])

    console.log("returned " + ref.current)
    // return the previous value (current value of ref before it is updated)
    return ref.current // undefined -> 1 -> 2
}

// code without comments:

// export const usePrev = (value) => {
//     const ref = useRef()

//     useEffect(() => {
//         console.log("updated the value of ref to: " + value)
//         ref.current = value
//     }, [value])

//     return ref.current
// }


// it returns first, effect gets called later

// https://giacomocerquone.com/blog/life-death-useprevious-hook/