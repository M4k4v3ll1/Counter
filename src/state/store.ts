import {combineReducers, legacy_createStore} from "redux";
import {changeValueReducer} from "./reducers/changeValueReducer";

const rootReducer = combineReducers({
    value: changeValueReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)