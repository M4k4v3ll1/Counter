import React, {ChangeEvent, FC} from "react";
import s from "../settings/Settings.module.css";
import {ErrorType} from "../settings/Settings";

type InputPropsType = {
    error: ErrorType
    onClickCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onFocusCallback: () => void
}
export const Input: FC<InputPropsType> = ({
                                              error,
                                              onClickCallback,
                                              onFocusCallback
                                          }) => {

    const onClickGetValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onClickCallback(e)
    }
    const onFocusHandler = () => {
        onFocusCallback()
    }
    return (
        <input
            className={error === 'Incorrect value!' ? s.errorInput : s.input}
            type='number'
            onChange={onClickGetValueHandler}
            onFocus={onFocusHandler}
        />
    )
}