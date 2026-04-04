import React, { useEffect, useState } from "react";

const App = () => {
    const [a, b] = useState(true)

    return (
        <div>
            <ErrorBoundary>
                <Card1 />
            </ErrorBoundary>
            <Card2 />
        </div>
    )
}

function Card1() {

    throw new Error("error while rendering")
    return <div style={{ background: "red", borderRadius: 20, padding: 10, margin: 10 }}>
        hi there
    </div>
}

function Card2() {
    return <div style={{ background: "red", borderRadius: 20, padding: 10, margin: 10 }}>
        hello
    </div>
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log("error caught:", error, info)
    }

    render() {
        if (this.state.hasError) {
            return <div style={{ background: "red", borderRadius: 20, padding: 10, margin: 10 }}>
                Something went wrong. Please try again later
            </div>
        }

        return this.props.children
    }
}

const BuggyComponent = () => {
    throw new Error("I crashed!")
}

export default App