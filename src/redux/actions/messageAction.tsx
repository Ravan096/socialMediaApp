import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../store";
import axios from "axios";

export const getSidebarUserAsync = createAsyncThunk(
    "getSidebarUsers",
    async ({ }: { args: string }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${server}/getallsidebarcharuser`, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return data
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("something went wrong")
        }
    }
)