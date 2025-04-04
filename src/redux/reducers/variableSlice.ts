import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
    varChatId: string;
}


const initialState: initialStateType = {
    varChatId: "",
}

const variableSlice = createSlice({
    name: "variableSlice",
    initialState,
    reducers: {
        getChatIdReq: (state: any, action: PayloadAction<string>) => {
            state.varChatId = action.payload;
        }
    }
})

export const { getChatIdReq } = variableSlice.actions;
export default variableSlice.reducer;