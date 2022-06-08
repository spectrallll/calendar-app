
export interface AuthState {
    isAuth: boolean,
    user: IUser,
    isLoading: boolean,
    error: string
}

export interface IUser {
    username: string,
    password: string
}
