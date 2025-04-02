import { configureStore } from "@reduxjs/toolkit";
import userslice from './reducers/userSlice';
import postSlice from './reducers/postSlice';
import messageSlice from './reducers/messageSlice';
import api from "./api/api";



const store = () => configureStore({
    reducer: {
        userslice,
        postSlice,
        messageSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
