import React from 'react'
import { useIsOnline } from './hooks/useIsOnline'

const App = () => {
    const isOnline = useIsOnline()

    return (
        <div style={{margin: '10px', textAlign: 'center'}}>
            <h1>Network Status Checker</h1>

            <div style={{marginTop: '20px'}}>
                {isOnline ? '🟢 You are Online' : '🔴 You are Offline'}
            </div>
        </div>
    )
}

export default App
