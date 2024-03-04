import React, {ChangeEvent, FC, useState} from "react";
import s from './Settings.module.css'
import {SuperButton} from "../counter/supperButton/SuperButton";
import {CounterVersionType} from "../../App";
import {Input} from "../input/Input";
import {useDispatch} from "react-redux";

type SettingsPropsType = {
    setStartValue: (startValue: number) => void
    setEndValue: (endValue: number) => void
    setDisplayValue: (SetStateAction: ErrorType) => void
    CounterVersion: CounterVersionType
    setCounterVersion: (SetStateAction: CounterVersionType) => void
}

export type ErrorType = `Enter values and press 'set'` | 'Incorrect value!' | number

export const Settings: FC<SettingsPropsType> = (
    {
        setStartValue,
        setEndValue,
        setDisplayValue,
        CounterVersion,
        setCounterVersion
    }) => {
    const dispatch = useDispatch()
    const [maxValue, setMaxValue] = useState<number>(1)
    const [minValue, setMinValue] = useState<number>(0)
    const [error, setError] = useState<ErrorType>(0)

    const onClickMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const maxV = parseInt(e.currentTarget.value);
        setMaxValue(maxV);

        if (maxV > 0 && minValue < maxV && minValue >= 0) {
            setError(`Enter values and press 'set'`)
            errorHandler(`Enter values and press 'set'`)
            setDisplayValue(`Enter values and press 'set'`)

        } else {
            setError('Incorrect value!')
            errorHandler('Incorrect value!')
            setDisplayValue('Incorrect value!')
        }
    }

    const onClickMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const minV = parseInt(e.currentTarget.value);
        setMinValue(minV);
        if (minV >= 0 && minV < maxValue && maxValue >= 1) {
            setError(`Enter values and press 'set'`)
            errorHandler(`Enter values and press 'set'`)
            setDisplayValue(`Enter values and press 'set'`)
            localStorage.setItem('minValue', JSON.stringify(minV))
        } else {
            setError('Incorrect value!')
            errorHandler('Incorrect value!')
            setDisplayValue('Incorrect value!')
        }
    }

    let [isDisabled, setIsDisabled] = useState<boolean>(true)

    const errorHandler = (error: ErrorType) => {
        isDisabled = error === ('Incorrect value!' || `Set new counter's values` || null)
        setIsDisabled(isDisabled)
    }

    const onClickHandler = () => {
        setStartValue(minValue)
        setEndValue(maxValue)
        setDisplayValue(minValue)
        setIsDisabled(true)
        if (CounterVersion === '1 display settings') {
            setCounterVersion('1 display')
        }
    }

    const onFocusHandler = () => {
        setIsDisabled(true)
    }

    return (
        <div className={s.settings}>
            <div className={s.settingsDisplay}>
                <div className={s.row}>
                    <div>max value:</div>
                    <Input error={error} onClickCallback={onClickMaxValue} onFocusCallback={onFocusHandler}/>
                </div>
                <div className={s.row}>
                    <div>start value:</div>
                    <Input error={error} onClickCallback={onClickMinValue} onFocusCallback={onFocusHandler}/>
                </div>
            </div>
            <div className={s.btn_area}>
                <SuperButton
                    name={'set'}
                    callback={onClickHandler}
                    isDisabled={isDisabled}
                />
            </div>
        </div>
    )
}

