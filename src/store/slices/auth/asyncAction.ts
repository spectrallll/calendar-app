import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "./types";
import UserService from "../../../api";

type ParamsProps = {
   username: string,
    password: string
}


export const login = createAsyncThunk<IUser, ParamsProps>(
    'auth/fetchAuth',
     async (params) => {
       try {
               const {username, password} = params;
               const {data} = await UserService.getUsers();
               const mockUser = data.find(user => user.username === username && user.password === password);
               if (mockUser) {
                   localStorage.setItem('auth', 'true');
                   localStorage.setItem('username', mockUser.username);
                   console.log(mockUser);
                   return mockUser;
               } else {
                   throw new Error('error')
               }
       } catch (e) {
           // @ts-ignore
           throw new Error(e);
       }
    }

)

export const logout = createAsyncThunk(
    'auth/fetchLogout',
    async () => {
        await localStorage.removeItem('auth');
        await localStorage.removeItem('username');
    }
)