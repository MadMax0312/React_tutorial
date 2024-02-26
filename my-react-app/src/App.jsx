import Practice4 from './Practice4'
import { useState } from 'react';

function App() {

    const [state, setState] = useState(false)

    return (
        <div>
            <h1 onClick={()=>setState(!state)}>Mount</h1>
            { state && <Practice4/> }
        </div>
    );
}

export default App
     