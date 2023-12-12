import React, {FC} from 'react';

type PropsType = {
    count: number
    MAXVALUE: number
}

export const Counter: FC<PropsType> = ({count, MAXVALUE}) => {
    return (
        <div className='counter'>
            <div className={count === MAXVALUE ? 'maxValue' : ''}>{count}</div>
        </div>
    );
};
