import React, {useState} from "react"

function UpdaterFunctionn() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(c => c + 1) // c represents the previous state
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    function decrement() {
        setCount(c => c - 1)// we will be working with previous state not current state
    }

    function reset() { //in here we don't need the previous state
        setCount(0)
    }

    return(<>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>)

}

export default UpdaterFunctionn