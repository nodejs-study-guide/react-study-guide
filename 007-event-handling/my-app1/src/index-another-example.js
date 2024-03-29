// https://owlcation.com/stem/reactCounter

import { useState } from 'react'
import ReactDOM from "react-dom/client";
import React from ".";

export default function App() {
    const [counter, setCounter] = useState(0);

    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    //decrease counter
    const decrease = () => {
        setCounter(count => count - 1);
    };

    //reset counter
    const reset = () =>{
        setCounter(0)
    }

    return (
        <div >
            <h1>React Counter</h1>
            <span >{counter}</span>
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App firstName="Peter" lastName="Parker"/>);