import React, {FC} from 'react';

type PropsType = {
    name: string
    onClickHandler: () => void
    isDisabled: boolean
}

export const SuperButton: FC<PropsType> = ({name, onClickHandler, isDisabled}) => {
    return (
        <button
            className='button'
            onClick={onClickHandler}
            disabled={isDisabled}
        >{name}</button>
    );
};
