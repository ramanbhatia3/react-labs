import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    let [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}

// if we want to debounce function 

// const debounce = (func, delay) => {
//     let timeout

//     return (...args) => {
//         clearTimeout(timeout)  // clears previous timer
//         timeout = setTimeout(() => func(...args), delay);  // starts a new timer
//     }
// }



// library:

// https://usehooks.com/