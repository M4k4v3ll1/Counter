import React, {FC} from "react";
import {SettingsDisplay} from "./settingsDisplay/SettingsDisplay";
import s from './Settings.module.css'
import {SuperButton} from "../counter/supperButton/SuperButton";

type SettingsPropsType = {}

export const Settings: FC<SettingsPropsType> = (
    {}) => {
    return (
        <div className={s.settings}>
            <SettingsDisplay/>
            <div className={s.btn_area}>
                <SuperButton
                    name={'set'}
                    onClickHandler={() => {}}
                    isDisabled={true}
                />
            </div>
        </div>
    )
}