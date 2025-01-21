import { createSlice } from "@reduxjs/toolkit";
import { getSidebarUserAsync } from "../actions/messageAction";

export interface SideUserDto {
    success: boolean;
    message: string;
    sideUsers: SideUser[];
}

export interface SideUser {
    Avatar: Tar;
    _id: string;
    FirstName: string;
    LastName: string;
    Email: string;
    posts: string[];
    followers: string[];
    following: string[];
    savedPost: any[];
    CreatedAt: Date;
    __v: number;
    Avtar?: Tar;
}

export interface Tar {
    public_id: string;
    url: string;
}

interface sideUserState {
    sideBarUser: SideUser[],
    loading: boolean
    error: any
}


const initialState: sideUserState = {
    sideBarUser: [],
    loading: false,
    error: null
}

const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getSidebarUserAsync.pending, (state) => {
            state.loading = true
        }).addCase(getSidebarUserAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.sideBarUser = action.payload.sideUsers
        }).addCase(getSidebarUserAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export const { } = messageSlice.actions;
export default messageSlice.reducer;