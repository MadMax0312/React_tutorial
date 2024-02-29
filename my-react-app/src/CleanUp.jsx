import React, { useEffect, useState } from 'react'

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(()=>{

        window.addEventListener('resize',handleResize)
        console.log('EVENT LISTENER ADDED')

    },[])


  return (
    <div>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </div>
  )
}

export default MyComponent