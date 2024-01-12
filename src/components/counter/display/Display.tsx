import React, {FC} from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    count: number
    maxValue: number
}

export const Display: FC<DisplayPropsType> = ({count, maxValue}) => {
    return (
        <div className={count === maxValue ? s.maxValue : s.display}>
            <span>{count}</span>
        </div>
    );
};
