import {combineReducers} from "@reduxjs/toolkit";
import {taskReducer} from "./taskReducer";


export const rootReducer = combineReducers({
    task: taskReducer,
})

export type RootState = ReturnType<typeof rootReducer>