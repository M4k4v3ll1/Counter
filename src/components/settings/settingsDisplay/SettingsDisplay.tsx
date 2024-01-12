import React, {FC} from "react";
import s from './SettingsDisplay.module.css'

type SettingsDisplayPropsType = {}
export const SettingsDisplay: FC<SettingsDisplayPropsType> = ({}) => {
    return (
        <div className={s.settingsDisplay}>
            <div>
                max value: <input type='number' step="1" min="1"/>
            </div>
            <div>
                start value: <input type='number' step="1" min="0"/>
            </div>
        </div>
    )
}