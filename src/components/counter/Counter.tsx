import React, {FC} from 'react';
import {Display} from "./display/Display";
import {SuperButton} from "./supperButton/SuperButton";
import s from './Counter.module.css'
import {ErrorType} from "../settings/Settings";
import {CounterVersionType} from "../../App";

type CounterPropsType = {
    minValue: number
    maxValue: number
    increaseCounter: () => void
    resetCounter: () => void
    isIncBtnDisabled: boolean
    isResBtnDisabled: boolean
    // is2DisplaysVersion: CounterVersionType
    // setCounterVersion: (SetStateAction: CounterVersionType) => void
}
const Counter: FC<CounterPropsType> = (
    {
   minValue,
        maxValue,
        increaseCounter,
        resetCounter,
        isIncBtnDisabled,
        isResBtnDisabled
    }) => {
    // const onClickSetHandler = () => {
    //     setCounterVersion('1 display settings')
    // }
    return (
        <div className={s.counter}>
            <Display minValue={minValue} maxValue={maxValue}/>
            <div className={s.btn_area}>
                <SuperButton
                    name='inc'
                    callback={increaseCounter}
                    isDisabled={isIncBtnDisabled}
                />
                <SuperButton
                    name='reset'
                    callback={resetCounter}
                    isDisabled={isResBtnDisabled}
                />
                {is2DisplaysVersion === '1 display'
                    ? <SuperButton
                        name={'set'}
                        callback={onClickSetHandler}
                        isDisabled={false}
                    />
                    : ''
                }
            </div>
        </div>
    );
};

export default Counter;

//From New Counter
// import React, {FC} from 'react';
// import {Display} from "./display/Display";
// import {SuperButton} from "./supperButton/SuperButton";
// import s from './Counter.module.css'
// import {useDispatch, useSelector} from "react-redux";
// import {increaseCounterAC, resetCounterAC} from "../../state/reducers/changeValueReducer";
// import {AppRootState} from "../../state/store";
//
// type CounterPropsType = {}
// const Counter: FC<CounterPropsType> = (
//     {}) => {
//     const startValue = useSelector<AppRootState, number>(state => state.value.startValue)
//     const endValue = useSelector<AppRootState, number>(state => state.value.endValue)
//     const count = useSelector<AppRootState, number>(state => state.value.count)
//     const dispatch = useDispatch()
//     const increaseCounter = () => {
//         dispatch(increaseCounterAC())
//     }
//     const resetCounter = () => {
//         dispatch(resetCounterAC())
//     }
//     const isIncBtnDisabled = count === endValue
//     const isResBtnDisabled = startValue === count
//     return (
//         <>
//             <div className={s.counter}>
//                 <Display
//                     count={count}
//                     endValue={endValue}
//                 />
//                 <div className={s.btn_area}>
//                     <SuperButton
//                         name='inc'
//                         callback={increaseCounter}
//                         isDisabled={isIncBtnDisabled}
//                     />
//                     <SuperButton
//                         name='reset'
//                         callback={resetCounter}
//                         isDisabled={isResBtnDisabled}
//                     />
//                 </div>
//             </div>
//             <div>{startValue} - {endValue}</div>
//         </>
//     );
// };
//
// export default Counter;