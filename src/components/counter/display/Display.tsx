import React, {FC} from 'react';
import s from './Display.module.css'
import {ErrorType} from "../../settings/Settings";

type DisplayPropsType = {
    minValue: number
    maxValue: number
}

export const Display: FC<DisplayPropsType> = ({minValue, maxValue}) => {

    // if (typeof count === 'number') {
    //     return count === maxValue
    //         ? s.limitValue
    //         : s.normalValue
    // } else {
    //     return count === `Incorrect value!`
    //         ? s.incorrectValue
    //         : s.setValue
    // }
    return (
        <div
            //className={
        //     typeof (count) === 'number'
        //         ? count === maxValue
        //             ? s.limitValue
        //             : s.normalValue
        //         : count === `Incorrect value!`
        //             ? s.incorrectValue
        //             : s.setValue
        // }
            >
            <span>{minValue}</span>
        </div>
    );
};


//From New Display
// import React, {FC} from 'react';
// import s from './Display.module.css'
//
// type DisplayPropsType = {
//     count: number
//     endValue: number
// }
//
// export const Display: FC<DisplayPropsType> = ({count, endValue}) => {
//     let finalClassname = count === endValue
//         ? s.limitValue
//         : s.normalValue
//
//     return (
//         <div className={finalClassname}>
//             <span>{count}</span>
//         </div>
//     );
// };
