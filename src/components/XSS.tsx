import React, {useState} from 'react';
import '../App.css';
import {createRef} from 'react';

export default function XSS(){
    const divRef = createRef<HTMLDivElement>();
    const inputRef = createRef<HTMLInputElement>();
    const data = "Nothing submitted yet."
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const onSubmit = () => {
        if (inputRef.current && divRef.current) {
            console.log(inputRef.current.value)
            if (checked) {
                divRef.current.innerText = inputRef.current.value
            } else {
                divRef.current.innerHTML = inputRef.current.value
            }
        }
    }

    return (
        <div className="App">
            <div className="container">
                <h1> XSS threat </h1>
            </div>
            <input ref={inputRef}/>
            <button className="button" onClick={() => onSubmit()}>Submit</button>
            Disable XSS:
            <input type="checkbox" onChange={handleChange} checked={checked}/>
            <body>Input: </body>

            <div ref={divRef}>
                {data}
            </div>
            <h3>Example:</h3>
            <div>
                To emulate xss try to input {"<img src onError=\"alert(document.domain)\">"}
            </div>
        </div>
    );
}