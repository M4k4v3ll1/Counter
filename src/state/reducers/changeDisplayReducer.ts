export type CounterVersionType = '1 display' | '2 displays' | '1 display settings'
export type ErrorType = `Enter values and press 'set'` | 'start value is less than 0' | 'values are equal!' | 'start value is greater than end value!' | ''
export type initialStateType = {
    error: ErrorType
    displayVersion: CounterVersionType
}
const initialState: initialStateType = {
    error: '',
    displayVersion: '1 display'
}

type changeDisplayAT = SetErrorActionType
| SetTwoDisplaysActionType
| SetOneDisplayActionType
| SetOneDisplaySettingsActionType

export type SetErrorActionType = ReturnType<typeof setErrorAC>
export type SetTwoDisplaysActionType = ReturnType<typeof setTwoDisplaysAC>
export type SetOneDisplayActionType = ReturnType<typeof setOneDisplayAC>
export type SetOneDisplaySettingsActionType = ReturnType<typeof setOneDisplaySettingsAC>

export const setErrorAC = (error: ErrorType) => {
    return {type: 'SET-ERROR', error} as const
}
export const setTwoDisplaysAC = () => {
    return {type: 'SET-TWO-DISPLAYS'} as const
}
export const setOneDisplayAC = () => {
    return {type: 'SET-ONE-DISPLAY'} as const
}
export const setOneDisplaySettingsAC = () => {
    return {type: 'SET-ONE-DISPLAY-SETTINGS'} as const
}

export const changeDisplayReducer = (state: initialStateType = initialState, action: changeDisplayAT): initialStateType => {
    switch (action.type) {
        case 'SET-ERROR':
            return {...state, error: action.error}
        case 'SET-TWO-DISPLAYS':
           return {...state, displayVersion: "2 displays"}
        case 'SET-ONE-DISPLAY':
           return {...state, displayVersion: "1 display"}
        case 'SET-ONE-DISPLAY-SETTINGS':
           return {...state, displayVersion: "1 display settings"}
        default:
            return state;
    }
}