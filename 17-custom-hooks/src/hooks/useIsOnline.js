import { useEffect, useState } from "react"


export const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const updateOnlineStatus = () => setIsOnline(navigator.onLine)

        window.addEventListener('online', updateOnlineStatus)
        window.addEventListener('offline', updateOnlineStatus)


        // clean up the event listeners on component unmount
        return () => {
            window.removeEventListener('online', updateOnlineStatus)
            window.removeEventListener('offline', updateOnlineStatus)
        }
    }, [])

    return isOnline
}