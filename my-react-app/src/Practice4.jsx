
import { useState } from 'react';

function MyButton() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>My component clicked me {count} times</h1>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}

export default MyButton