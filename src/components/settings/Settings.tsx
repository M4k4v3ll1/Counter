import React, {ChangeEvent, FC, useCallback, useState} from "react";
import s from './Settings.module.css'
import {SuperButton} from "../counter/supperButton/SuperButton";
import {Input} from "../input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../state/store";
import {setCountValueAC, setMaxValueAC, setMinValueAC} from "../../state/reducers/changeValueReducer";
import {CounterVersionType, ErrorType, setErrorAC, setOneDisplayAC} from "../../state/reducers/changeDisplayReducer";

type SettingsPropsType = {}

export const Settings: FC<SettingsPropsType> = () => {
    const minV = useSelector<AppRootState, number>(state => state.value.minValue)
    const maxV = useSelector<AppRootState, number>(state => state.value.maxValue)
    const error = useSelector<AppRootState, ErrorType>(state => state.error.error)
    const [maxValue, setMaxValue] = useState<number>(maxV)
    const [minValue, setMinValue] = useState<number>(minV)
    const displayVersion = useSelector<AppRootState, CounterVersionType>(state => state.error.displayVersion)
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const dispatch = useDispatch()

    const onClickMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const maxV = parseInt(e.currentTarget.value);
        setMaxValue(maxV)
        if (maxV > 0 && minValue < maxV && minValue >= 0 && maxV < 10000000) {
            dispatch(setErrorAC(`Enter values and press 'set'`))
            setIsDisabled(false)
        } else if (minValue < 0) {
            dispatch(setErrorAC('start value is less than 0'))
            setIsDisabled(true)
        } else if (maxV < minValue) {
            dispatch(setErrorAC('start value is greater than end value!'))
            setIsDisabled(true)
        } else if (maxV === minValue) {
            dispatch(setErrorAC('values are equal!'))
            setIsDisabled(true)
        }
    }, [minValue])
    const onClickMinValue = useCallback ((e: ChangeEvent<HTMLInputElement>) => {
        const minV = parseInt(e.currentTarget.value);
        setMinValue(minV)
        if (minV >= 0 && minV < maxValue && maxValue >= 1) {
            dispatch(setErrorAC(`Enter values and press 'set'`))
            setIsDisabled(false)
        } else if (minV < 0) {
            dispatch(setErrorAC('start value is less than 0'))
            setIsDisabled(true)
        } else if (maxValue < minV) {
            dispatch(setErrorAC('start value is greater than end value!'))
            setIsDisabled(true)
        } else if (maxValue === minV) {
            dispatch(setErrorAC('values are equal!'))
            setIsDisabled(true)
        }
    }, [maxValue])
    const onClickHandler = useCallback(() => {
        dispatch(setMaxValueAC(maxValue));
        dispatch(setMinValueAC(minValue));
        dispatch(setErrorAC(''))
        dispatch(setCountValueAC(minValue))
        setIsDisabled(true)
        if (displayVersion === '1 display settings') {
            dispatch(setOneDisplayAC())
        }
    }, [minValue, maxValue])

    let minInputClassName = s.input
    let maxInputClassName = s.input
    switch (error) {
        case 'start value is less than 0':
            minInputClassName = s.errorInput
            break
        case 'values are equal!':
            minInputClassName = s.errorInput
            maxInputClassName = s.errorInput
            break
        case 'start value is greater than end value!':
            minInputClassName = s.errorInput
            maxInputClassName = s.errorInput
            break
        default:
            break
    }
    return (
        <div className={s.settings}>
            <div className={s.settingsDisplay}>
                <div className={s.row}>
                    <div>max value:</div>
                    <Input value={maxValue} onClickCallback={onClickMaxValue} finalClassName={maxInputClassName}/>
                </div>
                <div className={s.row}>
                    <div>start value:</div>
                    <Input value={minValue} onClickCallback={onClickMinValue} finalClassName={minInputClassName}/>
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

