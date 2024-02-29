import {useState} from 'react'

function useToggle(inVal = false) {
    const [value, setValue] = useState(inVal)
    
    const toggle = () => {
        setValue(p => !p)
    }
    
    return [value, toggle]
}

function App() {
    const [istoggled, toggle] = useToggle(false)
    
    return (
        <div>
        <button onClick={toggle}>Toggle</button>
        { istoggled && <p> Toggle is ON </p> }
        </div>
        )
}

export default App