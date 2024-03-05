import React, {FC, memo} from 'react';
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    name: string
    callback: () => void
    isDisabled: boolean
}

export const SuperButton: FC<SuperButtonPropsType> = memo(({name, callback, isDisabled}) => {
    const finalClassName = s.button
        + (isDisabled
            ? ' ' + s.disabled
            : '')
    return (
        <button
            className={finalClassName}
            onClick={callback}
            disabled={isDisabled}
        >{name}</button>
    );
});
