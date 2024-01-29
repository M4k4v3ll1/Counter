import React, {useState} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import {ErrorType, Settings} from "./components/settings/Settings";
import {SuperButton} from "./components/counter/supperButton/SuperButton";

export type CounterVersionType = '1 display' | '2 displays' | '1 display settings'

function App() {
    const [startValue, setStartValue] = useState<number>(() => {
        let minValueAsString = localStorage.getItem('minValue')
        if (minValueAsString) {
            return JSON.parse(minValueAsString)
        }
        return 0
    })
    const [endValue, setEndValue] = useState<number>(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            return (JSON.parse(maxValueAsString))
        }
        return 5
    })
    const [displayValue, setDisplayValue] = useState<ErrorType>(startValue)
    const [CounterVersion, setCounterVersion] = useState<CounterVersionType>('2 displays')

    const increaseCounter = () => {
        if (typeof (displayValue) === 'number' && displayValue < endValue) {
            let newCount = displayValue + 1
            setDisplayValue(newCount)
        }
    }
    const resetCounter = () => {
        setDisplayValue(startValue)
    }
    const isIncBtnDisabled = typeof (displayValue) === 'string' || displayValue === endValue
    const isResBtnDisabled = typeof (displayValue) === 'string' || displayValue === startValue
    const changeVersionHandler = () => {
        if (CounterVersion === '1 display') {
            setCounterVersion('2 displays')
        } else if (CounterVersion === '2 displays') {
            setCounterVersion('1 display')
        } else {
            setCounterVersion('2 displays')
        }
    }
    return (
        <div className="App">
            <div className="header">
                <h1>Advanced counter</h1>
                <SuperButton name={CounterVersion === '2 displays' ? 'Set 1 display' : 'Set 2 displays'}
                             callback={changeVersionHandler}
                             isDisabled={false}
                />
            </div>
            {
                CounterVersion === '2 displays'
                    ? <div className="App">
                        <Settings
                            setStartValue={setStartValue}
                            setEndValue={setEndValue}
                            setDisplayValue={setDisplayValue}
                            setCounterVersion={setCounterVersion}
                            CounterVersion={CounterVersion}
                        />
                        <Counter
                            count={displayValue}
                            maxValue={endValue}
                            increaseCounter={increaseCounter}
                            resetCounter={resetCounter}
                            isIncBtnDisabled={isIncBtnDisabled}
                            isResBtnDisabled={isResBtnDisabled}
                            is2DisplaysVersion={CounterVersion}
                            setCounterVersion={setCounterVersion}
                        />
                    </div>
                    : CounterVersion === '1 display'
                        ? <div className="App">
                            <Counter
                                count={displayValue}
                                maxValue={endValue}
                                increaseCounter={increaseCounter}
                                resetCounter={resetCounter}
                                isIncBtnDisabled={isIncBtnDisabled}
                                isResBtnDisabled={isResBtnDisabled}
                                is2DisplaysVersion={CounterVersion}
                                setCounterVersion={setCounterVersion}
                            />
                        </div>
                        : <div className="App">
                            <Settings
                                setStartValue={setStartValue}
                                setEndValue={setEndValue}
                                setDisplayValue={setDisplayValue}
                                setCounterVersion={setCounterVersion}
                                CounterVersion={CounterVersion}
                            />
                        </div>
            }
        </div>
    );
}

export default App;
