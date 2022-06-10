import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EventState, IEvent} from "./types";
import {IUser, Status} from "../auth/types";
import {createIEvent, fetchEvents, fetchGuests} from "./asyncAction";

const initialState: EventState = {
    events: [],
    guests: [],
    status: Status.NOTHING
}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setGuest(state, action: PayloadAction<IUser[]>) {
            state.guests = action.payload;
        },
        setEvents(state, action: PayloadAction<IEvent[]>) {
            state.events = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGuests.pending, (state) => {
            state.status = Status.LOADING;
        });

        builder.addCase(fetchGuests.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.guests = action.payload;
        });

        builder.addCase(fetchGuests.rejected, (state) => {
           state.status = Status.ERROR;
        });



        builder.addCase(createIEvent.pending, (state) => {
            state.status = Status.LOADING;
        });

        builder.addCase(createIEvent.fulfilled, (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload;
        });

        builder.addCase(createIEvent.rejected, (state) => {
           state.status = Status.ERROR;
        });

        builder.addCase(fetchEvents.pending, (state) => {
           state.status = Status.LOADING;
        });

        builder.addCase(fetchEvents.fulfilled, (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchEvents.rejected, (state) => {
            state.status = Status.ERROR;
        })
    }
})

export const {setGuest, setEvents} = eventSlice.actions;
export default eventSlice.reducer;