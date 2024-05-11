import { configureStore } from "@reduxjs/toolkit"

import authReducer from './features/auth-slice'
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const makeStore = configureStore({
    reducer: {
        authReducer,
    },
})


export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;