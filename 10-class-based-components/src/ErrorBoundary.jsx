import React from "react";

// Error Boundaries are React components that catch JS errors in their child component tree and display a fallback UI. 

// Error boundaries only exist in class based components.

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error){
        return { hasError: true }
    }

    componentDidCatch(error, info){
        console.log("error caught:", error, info)
    }

    render(){
        if (this.state.hasError){
            return <h1>Something went wrong</h1>
        }

        return this.props.children
    }
}

const BuggyComponent = () => {
    throw new Error("I crashed!")
}

const App = () => {
    
}