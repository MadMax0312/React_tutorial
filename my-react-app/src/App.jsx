import {useEffect, useState} from 'react'

function App() {
    
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('white')
    const [boom, setBoom] = useState(false)

    useEffect(()=>{
        if(count>0 && count%3===0) {
            const id = setTimeout(()=>{
                setBoom(true)
            })
            return () => {
                clearTimeout(id)
            }
        } else {
            setBoom(false)
        }
    },[count])

    return (
        <div style={{background:color}}>

            <button onClick={()=>{
                setCount(count+1)
            }}>Incr</button>

            <h4>Count: {count}</h4>

            <button onClick={()=>{
                setCount(count-1)
            }}>Decr</button>

            <p onClick={()=>{
                setColor('Green')
            }}>Green</p>
            
            <p onClick={()=>{
                setColor('Red')
            }}>Red</p>

            {
                boom && <div>BOOM</div>
            }
        </div>
    );
}


export default App;
