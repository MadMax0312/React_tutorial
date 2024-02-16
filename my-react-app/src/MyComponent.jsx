import React, {useState} from "react";

function MyComponent() {

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0)
    const [reverseAge, setReverseAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("James")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const decrementAge = () => {
        setReverseAge(reverseAge - 1)
    }

    const checkEmployementStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Increment Age: {age}</p>
        <button onClick={incrementAge}>Increment</button>

        <p>Decrement Age: {reverseAge}</p>
        <button onClick={decrementAge}>Decrement</button>

        <p>Is Employed: {isEmployed ? 'Yes' : 'No'}</p>
        <button onClick={checkEmployementStatus}>Toggle Status</button>
    </div>)

}

export default MyComponent;