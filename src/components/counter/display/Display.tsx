import React, {FC, memo} from 'react';
import s from './Display.module.css'
import {useSelector} from "react-redux";
import {AppRootState} from "../../../state/store";

type DisplayPropsType = {
    showedValue: number | string
}

export const Display: FC<DisplayPropsType> = memo(({showedValue}) => {
    const endValue = useSelector<AppRootState, number>(state => state.value.endValue)
    let finalClassname =
        typeof (showedValue) === 'number'
            ? showedValue === endValue
                ? s.limitValue
                : s.normalValue
            : showedValue === `Enter values and press 'set'`
                ? s.setValue
                : s.incorrectValue

    return (
        <div className={finalClassname}>
            <span>{showedValue}</span>
        </div>
    );
});
