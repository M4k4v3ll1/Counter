import React, {FC} from 'react';
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    name: string
    onClickHandler: () => void
    isDisabled: boolean
}

export const SuperButton: FC<SuperButtonPropsType> = ({name, onClickHandler, isDisabled}) => {
    return (
        <button
            className={s.button}
            onClick={onClickHandler}
            disabled={isDisabled}
        >{name}</button>
    );
};
