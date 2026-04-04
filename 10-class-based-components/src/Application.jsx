import React, { useState, useEffect } from "react";

class MyComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { count: 0 }
    }

    componentDidMount(){
        console.log("Component Mounted!")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component Updated!")
    }

    componentWillUnmount(){
        console.log("Component will unmount!")
    }

    render(){
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
            </div>
        )
    }
}

function Application(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Component mounted or count updated')
    }, [count]) // runs on mount or at count change

    useEffect(() => {
        console.log('Component Mounted')
        return () => {
            console.log('Component will unmount')
        }
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}