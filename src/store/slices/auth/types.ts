export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
    NOTHING = ''
}

export interface AuthState {
    isAuth: boolean,
    user: IUser,
    status: Status
}

export interface IUser {
    username: string,
    password: string
}