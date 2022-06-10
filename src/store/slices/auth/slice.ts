import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthState, IUser, Status} from "./types";
import {login} from "./asyncAction";

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    status: Status.NOTHING
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
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.status = Status.LOADING
        });

        builder.addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;
                state.status = Status.SUCCESS
                state.isAuth = true;
        });

        builder.addCase(login.rejected, (state, action) => {
            state.status = Status.ERROR;
        })
    }
})

export const {setAuth} = authSlice.actions;
export default authSlice.reducer;