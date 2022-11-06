import React, {useState} from 'react';
import './App.css';
import XSS from "./components/XSS";
import CSRF from "./components/CSRF";

function App() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <div>
                Show CSRF if checked if not show XSS: <input type="checkbox" onChange={handleChange} checked={checked}/>
            </div>
            {
                !checked && (
                    <XSS/>
                )
            }
            {
                checked && (
                    <CSRF/>
                )
            }
        </>
    );
}

export default App;
