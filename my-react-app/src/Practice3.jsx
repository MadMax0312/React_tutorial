import React, {useState} from "react";

function Practice3() {

    const [name, setName] = useState('')
    const [newName, setNew] = useState('')

    function handleInputChange(e) {
        let name = e.target.value
        setName(name)
    }

    function handleAddName(e) {
        setNew(name)
        document.getElementById('hot').value = '';
    }

    return(
        <div className="formm">
            <h2>Enter your name: </h2>
            <input type="text" id="hot" onChange={handleInputChange} />
            <button onClick={handleAddName}>Submit</button>
            <p>Name: {newName}</p>
        </div>
    )

}

export default Practice3