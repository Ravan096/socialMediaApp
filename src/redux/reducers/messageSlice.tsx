import { createSlice } from "@reduxjs/toolkit";
import { getMyChatsAsync, getSidebarUserAsync } from "../actions/messageAction";

export interface SideUserDto {
    success: boolean;
    message: string;
    sideUsers: SideUser[];
}

export interface IChatDto {
    success: boolean;
    enhancedChats: Chat[];
}

export interface Chat {
    _id: string;
    Name: string;
    participants: SenderID[];
    groupChat: boolean;
    messages: any[];
    CreatedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    lastMessage: LastMessage;
    Creator?: string;
}

export interface LastMessage {
    _id: string;
    content: string;
    senderId: SenderID;
    chat: string;
    timestamp: Date;
    __v: number;
}

export interface SenderID {
    _id: string;
    Avatar: Avatar;
    FullName: string;
}

export interface Avatar {
    public_id: string;
    url: string;
}

export interface Participant {
    _id: string;
    Avatar: Avatar;
    FullName: string;
}

export interface Avatar {
    public_id: string;
    url: string;
}

export interface SideUser {
    Avatar: Tar;
    _id: string;
    FullName: string;
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
    mychats: IChatDto | null
}


const initialState: sideUserState = {
    sideBarUser: [],
    loading: false,
    error: null,
    mychats: null
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
        builder.addCase(getMyChatsAsync.pending, (state) => {
            state.loading = true;
        }).addCase(getMyChatsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }).addCase(getMyChatsAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.mychats = action.payload
        })
    }
})

export const { } = messageSlice.actions;
export default messageSlice.reducer;