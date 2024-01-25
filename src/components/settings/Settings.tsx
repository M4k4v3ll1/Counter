import React, {ChangeEvent, FC, useState} from "react";
import s from './Settings.module.css'
import {SuperButton} from "../counter/supperButton/SuperButton";

type SettingsPropsType = {
    setStartValue: (startValue: number) => void
    setEndValue: (endValue: number) => void
    setDisplayValue: (SetStateAction: ErrorType) => void
}

export type ErrorType = `Enter values and press 'set'` | 'Incorrect value!' | number

export const Settings: FC<SettingsPropsType> = (
    {
        setStartValue,
        setEndValue,
        setDisplayValue
    }) => {
    const [maxValue, setMaxValue] = useState<number>(1)
    const [minValue, setMinValue] = useState<number>(0)
    const [error, setError] = useState<ErrorType>(0)

    const onClickMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
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

    const onClickMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const minV = parseInt(e.currentTarget.value);
        setMinValue(minV);
        if (minV >= 0 && minV < maxValue && maxValue >= 1) {
            setError(`Enter values and press 'set'`)
            errorHandler(`Enter values and press 'set'`)
            setDisplayValue(`Enter values and press 'set'`)
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

    const onClicksHandler = () => {
        setStartValue(minValue)
        setEndValue(maxValue)
        setDisplayValue(minValue)
        setIsDisabled(true)
    }

    const onFocusHandler = () => {
        setIsDisabled(true)
    }

    return (
        <div className={s.settings}>
            <div className={s.settingsDisplay}>
                <div className={s.row}>
                    <div>max value:</div>
                    <input
                        className={error === 'Incorrect value!' ? s.errorInput : s.input}
                        type='number'
                        step="1"
                        onChange={onClickMaxValueHandler}
                        onFocus={onFocusHandler}
                    />
                </div>
                <div className={s.row}>
                    <div>start value:</div>
                    <input
                        className={error === 'Incorrect value!' ? s.errorInput : s.input}
                        type='number'
                        step="1"
                        onChange={onClickMinValueHandler}
                        onFocus={onFocusHandler}
                    />
                </div>
            </div>
            <div className={s.btn_area}>
                <SuperButton
                    name={'set'}
                    callback={onClicksHandler}
                    isDisabled={isDisabled}
                />
            </div>
        </div>
    )
}