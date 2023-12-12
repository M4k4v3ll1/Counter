import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {SuperButton} from "./components/supperButton/SuperButton";

function App() {
    const STARTVALUE = 0
    const MAXVALUE = 5

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
            <Counter count={count} MAXVALUE={MAXVALUE}/>
            {/*<Buttons count={count} increaseCounter={increaseCounter} resetCounter={resetCounter}/>*/}
            <SuperButton name='inc' onClickHandler={increaseCounter} isDisabled={isIncBtnDisabled}/>
            <SuperButton name='reset' onClickHandler={resetCounter} isDisabled={isResBtnDisabled}/>
        </div>
    );
}

export default App;
