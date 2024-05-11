import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FaLessThanEqual } from "react-icons/fa";
import { isMapIterator } from "util/types";

type InitialState = { value: AuthState; }

type AuthState = {
    isAuth: boolean,
    username: string;
    uid: string;
}

const initialState = {
    value: {
        isAuth: false,
        username: '',
        uid: '',
    } as AuthState
} as InitialState;


export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (_, action: PayloadAction<string>) => {   //<string> we want to send back a string  containig the username 
            //also we are not using the state in  logIn:(state,action:PayloadAction<string>)
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: "whataver",
                }
            }
        },

    }

})

export const { logIn, logOut } = auth.actions

export default auth.reducer;