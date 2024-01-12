import React, {FC} from 'react';
import {Display} from "./display/Display";
import {SuperButton} from "./supperButton/SuperButton";
import s from './Counter.module.css'

type CounterPropsType = {
    count: number
    maxValue: number
    increaseCounter: () => void
    resetCounter: () => void
    isIncBtnDisabled: boolean
    isResBtnDisabled: boolean
}
const Counter: FC<CounterPropsType> = (
    {
        count,
        maxValue,
        increaseCounter,
        resetCounter,
        isIncBtnDisabled,
        isResBtnDisabled
    }) => {
    return (
        <div className={s.counter}>
            <Display count={count} maxValue={maxValue}/>
            <div className={s.btn_area}>
                <SuperButton name='inc' onClickHandler={increaseCounter} isDisabled={isIncBtnDisabled}/>
                <SuperButton name='reset' onClickHandler={resetCounter} isDisabled={isResBtnDisabled}/>
            </div>
        </div>
    );
};

export default Counter;