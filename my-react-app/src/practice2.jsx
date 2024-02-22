import React, {useState} from "react"

function Practice2() {
    const [count, setCount] = useState(0)


    function handleAdd() {
        setCount(count + 1)
    }

    function handleMinus() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

    const style = {
        backgroundColor: count % 2 === 0 ? "red" : "green"
    };

    return(
        <div className="contain">
            <h1>Set Count</h1>
            <p className="count" style={style}>{count}</p>
            <div className="butt">
            <button onClick={handleMinus}>Minus</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    )

}

export default Practice2