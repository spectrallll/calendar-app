import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../auth/types";
import UserService from "../../../api";
import {IEvent} from "./types";

export const fetchGuests = createAsyncThunk<IUser[]>(
    'event/fetchGuests',
    async () => {
        const {data} = await UserService.getUsers();
        return data;
    }
)

export const createIEvent = createAsyncThunk<IEvent[], IEvent>(
    'event/createEvent',
    async (event) => {
        const events = localStorage.getItem('events') || '[]';
        const json = JSON.parse(events) as IEvent[];
        json.push(event);
        localStorage.setItem('events', JSON.stringify(json));
        return json;
    }
)



export const fetchEvents = createAsyncThunk<IEvent[], string>(
    'event/fetchEvent',
    async (username) => {
        const events = localStorage.getItem('events') || '[]';
        const json = JSON.parse(events) as IEvent[];
        const currentUserEvents = json.filter(ev => ev.author === username || ev.guest);
        return currentUserEvents;
    }
)