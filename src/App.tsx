import React, {useState} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


function App() {
    const STARTVALUE = 0
    const MAXVALUE = 5

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1)

    const increaseStartValue = () => {

    }

    const [count, setCount] = useState<number>(STARTVALUE)

    const increaseCounter = () => {
        if (count < MAXVALUE) {
            let newCount = count + 1
            setCount(newCount)
        }
    }

    const resetCounter = () => {
        setCount(STARTVALUE)
    }

    const isIncBtnDisabled = count === MAXVALUE
    const isResBtnDisabled = count === STARTVALUE

    return (
        <div className="App">
            <Settings

            />
            <Counter
                count={count}
                maxValue={MAXVALUE}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                isIncBtnDisabled={isIncBtnDisabled}
                isResBtnDisabled={isResBtnDisabled}
            />
        </div>
    );
}

export default App;
