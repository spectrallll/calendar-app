import {IUser, Status} from "../auth/types";

export interface IEvent {
    author: string,
    guest: string,
    date: string,
    description: string
}

export interface EventState {
    guests: IUser[],
    events: IEvent[]
    status: Status
}