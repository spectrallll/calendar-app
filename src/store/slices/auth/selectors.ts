import {RootState} from "../../store";

export const selectAuth = (state: RootState) => state.auth.isAuth;

export const selectAllAuth = (state: RootState) => state.auth;