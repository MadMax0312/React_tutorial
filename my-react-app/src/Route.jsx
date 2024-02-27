import About from "./Container/About";
import Profile from "./Container/Profile";
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import {AppContext} from './AppContext'

import { useState } from "react";

function App() {
    const [state, setState] = useState(10)
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/about')}>About Me</button>
            <button onClick={() => navigate('/profile')}>Profile</button>
            <AppContext.Provider value={state}>

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

            </AppContext.Provider>
        </div>
    );
}


export default App;
