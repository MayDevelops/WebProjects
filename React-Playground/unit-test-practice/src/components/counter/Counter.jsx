import React, {useState} from "react";
import "./Counter.css";

function Counter() {
    //all javascript goes here. VAriables, functions, whatever.
    // curly brackets mean "write javascript code"

    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const addToCounter = () => {
        setCounterValue(counterValue + inputValue);
    }

    const subFromCounter = () => {
        setCounterValue(counterValue - inputValue);
    }

    return (
        //what to render
        <div>
            <h1 data-testid="header" className={"CounterClass"}>My Counter</h1>
            <h2 data-testid="counter">{counterValue}</h2>
            <button data-testid="subButton"
                    onClick={subFromCounter}>-
            </button>
            <input
                data-testid="input"
                type="number"
                value={inputValue}
                onChange={(event => {
                    setInputValue(parseInt(event.target.value));
                })}/>
            <button data-testid="addButton"
                    onClick={addToCounter}>+
            </button>
        </div>
    );
}

export default Counter;