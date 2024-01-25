import React, {FC} from 'react';
import s from './Display.module.css'
import {ErrorType} from "../../settings/Settings";

type DisplayPropsType = {
    count: ErrorType
    maxValue: number
}

export const Display: FC<DisplayPropsType> = ({count, maxValue}) => {
    return (
        <div className={
            typeof (count) === 'number'
                ? count === maxValue
                    ? s.limitValue
                    : s.normalValue
                : count === `Incorrect value!`
                    ? s.incorrectValue
                    : s.setValue
        }>
            <span>{count}</span>
        </div>
    );
};
