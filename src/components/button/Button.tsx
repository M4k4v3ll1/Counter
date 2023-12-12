import React, {FC} from 'react';

type PropsType = {
    count: number
    increaseCounter: (count: number) => void
    resetCounter: () => void
}

export const Buttons: FC<PropsType> = ({count, increaseCounter, resetCounter}) => {
    const increaseCounterHandler = () => increaseCounter(count)
    const resetCounterHandler = () => resetCounter()

    return (
        <div>
            <button
                className='button'
                onClick={increaseCounterHandler}
                disabled={count === 5}
            >inc
            </button>
            <button
                className='button'
                onClick={resetCounterHandler}
                disabled={count === 0}
            >reset
            </button>
        </div>
    );
};
