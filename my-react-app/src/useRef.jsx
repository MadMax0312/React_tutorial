import React, { useState, useEffect, useRef } from 'react'

function MyComponent() {

    // const [number, setNumber] = useState(0)
 
    const inputRef1 = useRef()
    const inputRef2= useRef()
    const inputRef3= useRef()

    useEffect(()=> {
        console.log('Component Rendered')
    })

    function handleClick1() {
        inputRef1.current.style.backgroundColor = 'yellow'
        inputRef2.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = ''
    }

    function handleClick2() {
        inputRef1.current.style.backgroundColor = ''
        inputRef2.current.style.backgroundColor = 'orange'
        inputRef3.current.style.backgroundColor = ''
    }

    function handleClick3() {
        inputRef1.current.style.backgroundColor = ''
        inputRef2.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = 'red'
    }

    return (
    <div>
        <input ref={inputRef1} type="text" />
        <button onClick={handleClick1}>Click Me</button><br />

        <input ref={inputRef2} type="text" />
        <button onClick={handleClick2}>Click Me</button><br />

        <input ref={inputRef3} type="text" />
        <button onClick={handleClick3}>Click Me</button>
    </div>
  )
}

export default MyComponent