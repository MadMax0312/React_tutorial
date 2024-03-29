import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment button</button>
            <button onClick={decrement}>Decrement button</button>
            <button onClick={reset}>Reset button</button>
        </div>
    )

}

export default Counter;