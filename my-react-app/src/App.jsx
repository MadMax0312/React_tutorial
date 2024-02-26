import About from "./Component/About";
import Profile from "./Component/Profile";
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import { useState } from "react";

function App() {
    const [state, setState] = useState('')
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/about')}>About Me</button>
            <button onClick={() => navigate('/profile')}>Profile</button>
            <Routes>
                <Route element={<About />} path="/about" />
                <Route element={<Profile />} path="/profile" />
            </Routes>
        </div>
    );
}


export default App;
