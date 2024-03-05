import {combineReducers, legacy_createStore} from "redux";
import {changeValueReducer} from "./reducers/changeValueReducer";
import {changeDisplayReducer} from "./reducers/changeDisplayReducer";

const rootReducer = combineReducers({
    value: changeValueReducer,
    error: changeDisplayReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)