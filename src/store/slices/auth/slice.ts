import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthState, IUser} from "./types";

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },

    },
    extraReducers: builder => {

    }
})

export const {setAuth} = authSlice.actions;
export default authSlice.reducer;