import React, {FC, memo, useCallback} from 'react';
import {Display} from "./display/Display";
import {SuperButton} from "./supperButton/SuperButton";
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {increaseCounterAC, resetCounterAC} from "../../state/reducers/changeValueReducer";
import {AppRootState} from "../../state/store";
import {CounterVersionType, setOneDisplayAC, setOneDisplaySettingsAC} from "../../state/reducers/changeDisplayReducer";

type CounterPropsType = {}

const Counter: FC<CounterPropsType> = memo(() => {
    const startValue = useSelector<AppRootState, number>(state => state.value.startValue)
    const endValue = useSelector<AppRootState, number>(state => state.value.endValue)
    const count = useSelector<AppRootState, number>(state => state.value.count)
    const error = useSelector<AppRootState, string>(state => state.error.error)
    const displayVersion = useSelector<AppRootState, CounterVersionType>(state => state.error.displayVersion)
    const dispatch = useDispatch()
    const increaseCounter = useCallback(() => {
        dispatch(increaseCounterAC())
    }, [])
    const resetCounter = useCallback (() => {
        dispatch(resetCounterAC())
    }, [])
    const toggleDisplays = useCallback (() => {
        if (displayVersion === '1 display') {
            dispatch(setOneDisplaySettingsAC())
        } else if (displayVersion === '1 display settings') {
            dispatch(setOneDisplayAC())
        }
    }, [displayVersion])
    const isIncBtnDisabled = count === endValue || error !== ''
    const isResBtnDisabled = startValue === count || error !== ''

    return (
            <div className={s.counter}>
                <Display
                    showedValue={error === '' ? count : error}
                />
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
                    {displayVersion === '1 display'
                    ? <SuperButton
                            name='set'
                            callback={toggleDisplays}
                            isDisabled={false}
                        />
                    : false}
                </div>
            </div>
    );
});

export default Counter;