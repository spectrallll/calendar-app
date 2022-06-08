import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthState} from "./types";

const initialState: AuthState = {
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        }
    }
})

export const {} = authSlice.actions;
export default authSlice.reducer;