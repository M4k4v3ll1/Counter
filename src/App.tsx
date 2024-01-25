import React, {useState} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import {ErrorType, Settings} from "./components/settings/Settings";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [endValue, setEndValue] = useState<number>(5)

    const [displayValue, setDisplayValue] = useState<ErrorType>(startValue)

    const increaseCounter = () => {
        if (typeof(displayValue) === 'number' && displayValue < endValue) {
            let newCount = displayValue + 1
            setDisplayValue(newCount)
        }
    }

    const resetCounter = () => {
        setDisplayValue(startValue)
    }

    const isIncBtnDisabled = typeof(displayValue) === 'string' || displayValue === endValue
    const isResBtnDisabled = typeof(displayValue) === 'string' || displayValue === startValue

    return (
        <div className="App">
            <Settings
                setStartValue={setStartValue}
                setEndValue={setEndValue}
                setDisplayValue={setDisplayValue}
            />
            <Counter
                count={displayValue}
                maxValue={endValue}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                isIncBtnDisabled={isIncBtnDisabled}
                isResBtnDisabled={isResBtnDisabled}
            />
        </div>
    );
}

export default App;
