const initialState = {
    startValue: 0,
    endValue: 5,
    count: 0
}

export type initialStateType = typeof initialState

type StartValueAT = IncreaseCounterActionType
    | ResetCounterActionType

export type IncreaseCounterActionType = ReturnType<typeof increaseCounterAC>
export type ResetCounterActionType = ReturnType<typeof resetCounterAC>

export const increaseCounterAC = () => {
    return {type: 'INCREASE-COUNTER'} as const
}
export const resetCounterAC = () => {
    return {type: 'RESET-COUNTER'} as const
}

export const changeValueReducer = (state: initialStateType = initialState, action: StartValueAT): initialStateType => {
    switch (action.type) {
        case 'INCREASE-COUNTER':
            return {...state, count: state.count + 1}
        case 'RESET-COUNTER':
            return {...state, count: state.startValue}
        default:
            return state;
    }
}