const initialState = {
    startValue: 0,
    endValue: 5,
    count: 0,
    minValue: 0,
    maxValue: 5
}

export type initialStateType = typeof initialState

type ChangeValueAT = IncreaseCounterActionType
    | ResetCounterActionType
    | SetMinValueActionType
    | SetMaxValueActionType
    | SetCountValueActionType

export type IncreaseCounterActionType = ReturnType<typeof increaseCounterAC>
export type ResetCounterActionType = ReturnType<typeof resetCounterAC>
export type SetMinValueActionType = ReturnType<typeof setMinValueAC>
export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
export type SetCountValueActionType = ReturnType<typeof setCountValueAC>

export const increaseCounterAC = () => {
    return {type: 'INCREASE-COUNTER'} as const
}
export const resetCounterAC = () => {
    return {type: 'RESET-COUNTER'} as const
}
export const setMinValueAC = (minValue: number) => {
    return {type: 'SET-MIN-VALUE', minValue} as const
}
export const setMaxValueAC = (maxValue: number) => {
    return {type: 'SET-MAX-VALUE', maxValue} as const
}
export const setCountValueAC = (count: number) => {
    return {type: 'SET-COUNT-VALUE', count} as const
}

export const changeValueReducer = (state: initialStateType = initialState, action: ChangeValueAT): initialStateType => {
    switch (action.type) {
        case 'INCREASE-COUNTER':
            return {...state, count: state.count + 1}
        case 'RESET-COUNTER':
            return {...state, count: state.startValue}
        case 'SET-MIN-VALUE':
            return {...state, startValue: action.minValue, minValue: action.minValue}
        case 'SET-MAX-VALUE':
            return {...state, endValue: action.maxValue, maxValue: action.maxValue}
        case 'SET-COUNT-VALUE':
            return {...state, count: action.count}
        default:
            return state;
    }
}