import {useState} from 'react'

function useToggle(initialValue = false) {

    const [value, setValue] = useState(initialValue)

    const toggle = ()=> {
        setValue(v => !v)
    }

    return [value, toggle]

}

function App() {

    const [isToggled, toggle] = useToggle()

    return(
        <div>
            <button onClick={toggle}>Click Me</button>
            {
                isToggled && <p>Toggled</p>
            }
        </div>
    )
}

export default App