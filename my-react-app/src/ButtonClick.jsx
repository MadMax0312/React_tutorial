import { useState } from 'react';

function ButtonClick() {

    const [count, setCount] = useState(0);

        function handleClick2() {
            setCount(count + 1);
        }

    const handleClick = (e) => e.target.textContent = `Ouch!!! 🤣`

    return (
        <>
        <button onDoubleClick={(e) => handleClick(e)}>Click Me &#x1F60A;</button>
        <button onClick={handleClick2}>Clicked {count} times &#x1F60A;</button>
        </>
    )

}

export default ButtonClick;