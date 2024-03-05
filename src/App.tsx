import React, {memo} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";
import {SuperButton} from "./components/counter/supperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";
import {CounterVersionType, setOneDisplayAC, setTwoDisplaysAC} from "./state/reducers/changeDisplayReducer";


export const App = memo(() => {
    const displayVersion = useSelector<AppRootState, CounterVersionType>(state => state.error.displayVersion)
    const dispatch = useDispatch()
    const toggleCounterVersion = () => {
        if (displayVersion === '1 display') {
            dispatch(setTwoDisplaysAC())
        } else if (displayVersion === '2 displays') {
            dispatch(setOneDisplayAC())
        }
    }

    return (
        <div className="App">
            <div className='header'>
                <h1>Advanced counter</h1>
                <div className="btn">
                    <SuperButton
                        name={displayVersion === '2 displays' ? 'Set single display' : 'Set two displays'}
                        callback={toggleCounterVersion}
                        isDisabled={displayVersion === '1 display settings'}
                    />
                </div>
            </div>
                        <div className="App">
                {displayVersion === '2 displays'
                    ? <div className="App">
                        <Settings/>
                        <Counter/>
                    </div>
                    : displayVersion === '1 display'
                        ? <div className="App">
                            <Counter/>
                        </div>
                        : <div>
                            <Settings/>
                        </div>
                }
            </div>
        </div>
    );
})

export default App;


// function App() {
//     //const [startValue, setStartValue] = useState<number>(0)
//     const dispatch = useDispatch()
//     const startValue = useSelector<AppRootState, number>(state => state.startValue.value)
//     const increaseCounter = () => {
//         // if (typeof (displayValue) === 'number' && displayValue < endValue) {
//         //     dispatch(increaseCounterAC())
//         // }
//     }
//
//     const [endValue, setEndValue] = useState<number>(5)
//     // const [displayValue, setDisplayValue] = useState<ErrorType>(startValue)
//     // const [CounterVersion, setCounterVersion] = useState<CounterVersionType>('2 displays')
//
//
//     const resetCounter = () => {
//         // setDisplayValue(startValue)
//     }
//     // const isIncBtnDisabled = typeof (displayValue) === 'string' || displayValue === endValue
//     // const isResBtnDisabled = typeof (displayValue) === 'string' || displayValue === startValue
//     const isIncBtnDisabled = startValue === endValue
//     const isResBtnDisabled = startValue !== endValue
//     // const changeVersionHandler = () => {
//     //     if (CounterVersion === '1 display') {
//     //         setCounterVersion('2 displays')
//     //     } else if (CounterVersion === '2 displays') {
//     //         setCounterVersion('1 display')
//     //     } else {
//     //         setCounterVersion('2 displays')
//     //     }
//     // }
//     return (
//         <div className="App">
//             <div className="header">
//                 <h1>Advanced counter</h1>
//                 {/*<SuperButton name={CounterVersion === '2 displays' ? 'Set 1 display' : 'Set 2 displays'}*/}
//                 {/*             callback={changeVersionHandler}*/}
//                 {/*             isDisabled={false}*/}
//                 {/*/>*/}
//             </div>
//             {
//                 // CounterVersion === '2 displays'
//                 //     ? <div className="App">
//                 //         <Settings
//                 //             setStartValue={setStartValue}
//                 //             setEndValue={setEndValue}
//                 //             setDisplayValue={setDisplayValue}
//                 //             setCounterVersion={setCounterVersion}
//                 //             CounterVersion={CounterVersion}
//                 //         />
//                 //         <Counter
//                 //             count={displayValue}
//                 //             maxValue={endValue}
//                 //             increaseCounter={increaseCounter}
//                 //             resetCounter={resetCounter}
//                 //             isIncBtnDisabled={isIncBtnDisabled}
//                 //             isResBtnDisabled={isResBtnDisabled}
//                 //             is2DisplaysVersion={CounterVersion}
//                 //             setCounterVersion={setCounterVersion}
//                 //         />
//                 //     </div>
//                 //     : CounterVersion === '1 display'
//                 //         ?
//                         <div className="App">
//                             <Counter
//                                 minValue={startValue}
//                                 maxValue={endValue}
//                                 increaseCounter={increaseCounter}
//                                 resetCounter={resetCounter}
//                                 isIncBtnDisabled={isIncBtnDisabled}
//                                 isResBtnDisabled={isResBtnDisabled}
//                             />
//                         </div>
//                         // : <div className="App">
//                         //     <Settings
//                         //         setStartValue={setStartValue}
//                         //         setEndValue={setEndValue}
//                         //         setDisplayValue={setDisplayValue}
//                         //         setCounterVersion={setCounterVersion}
//                         //         CounterVersion={CounterVersion}
//                         //     />
//                         // </div>
//             }
//         </div>
//     );
// }

//export default App;
