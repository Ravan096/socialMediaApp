import { configureStore } from "@reduxjs/toolkit";
import userslice from './reducers/userSlice';
import postSlice from './reducers/postSlice';
import messageSlice from './reducers/messageSlice';



const store = () => configureStore({
    reducer: {
        userslice,
        postSlice,
        messageSlice
    }
});

export const server2 = "https://socialmedianodeserver.onrender.com/api/v1";
export const server1 = "http://localhost:4000/api/v1";
export const server = "https://social-media-mitra-junction.vercel.app/api/v1";

export default store

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
