import {combineReducers, configureStore} from '@reduxjs/toolkit';
import slices from './slices/index';

const rootReducer = combineReducers(slices);

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;