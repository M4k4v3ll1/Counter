import React, {FC} from 'react';
import {Display} from "./display/Display";
import {SuperButton} from "./supperButton/SuperButton";
import s from './Counter.module.css'
import {ErrorType} from "../settings/Settings";
import {CounterVersionType} from "../../App";

type CounterPropsType = {
    count: ErrorType
    maxValue: number
    increaseCounter: () => void
    resetCounter: () => void
    isIncBtnDisabled: boolean
    isResBtnDisabled: boolean
    is2DisplaysVersion: CounterVersionType
    setCounterVersion: (SetStateAction: CounterVersionType) => void
}
const Counter: FC<CounterPropsType> = (
    {
        count,
        maxValue,
        increaseCounter,
        resetCounter,
        isIncBtnDisabled,
        isResBtnDisabled,
        is2DisplaysVersion,
        setCounterVersion
    }) => {
    const onClickSetHandler = () => {
        setCounterVersion('1 display settings')
    }
    return (
        <div className={s.counter}>
            <Display count={count} maxValue={maxValue}/>
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