import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { changePasswordAsync, deleteUserAsync, forgetPasswordAsync, getAllUsersAsync, getSingleUserAsync, loginAsync, logoutAsync, meAsync, registerUserAsync, resetPasswordAsync, updateUserAsync } from '../actions/userAction';

export interface User {
    Avatar: Avtar;
    _id: string;
    FullName: string;
    userName: string;
    Email: string;
    Password: string;
    posts: Post[];
    followers: string[];
    following: string[];
    savedPost: any[];
    CreatedAt: Date;
    state: string;
    bio: string;
    gender: string;
    dob: Date;
    mobile: string;
    website: string;
    __v: number;
}

export interface Avtar {
    public_id: string;
    url: string;
}


export interface Post {
    _id: string;
    image: {
        public_Id: string;
        url: string;
    };
}

export interface UserDto {
    success: boolean;
    user: User;
    token: string;
}




interface UserState {
    loading: boolean;
    isAuthenticated: boolean;
    user: User | null;
    message: string | null;
    error: string | null;
}

const initialState: UserState = {
    loading: false,
    isAuthenticated: false,
    user: null,
    message: null,
    error: null,
}

const useSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRequest: (state: any) => {
            state.loading = true;
        },
        loginRequestSuccess: (state: any, action: any) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.message = action.payload.message
        },
        loginRequestFail: (state: any, action: PayloadAction<string>) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload
        },
        clearError: (state: any) => {
            state.error = null
        },
        clearMessage: (state: any) => {
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.pending, (state) => {
            state.loading = true
            state.isAuthenticated = false
        }).addCase(loginAsync.rejected, (state, action) => {
            const { message } = action.error
            state.error = message || "Failed to login."
            state.loading = false
        }).addCase(loginAsync.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.loading = false
            state.user = action.payload.user
            state.message = "Login Successfully!"
        })

        builder.addCase(meAsync.pending, (state) => {
            state.loading = true
        }).addCase(meAsync.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.loading = false
            state.user = action.payload.user
        }).addCase(meAsync.rejected, (state, action) => {
            const { message } = action.error
            state.loading = false
            state.error = message || "Failed to load detail"
        })

        builder.addCase(registerUserAsync.pending, () => {

        }).addCase(registerUserAsync.fulfilled, () => {

        }).addCase(registerUserAsync.rejected, () => {

        })

        builder.addCase(getAllUsersAsync.pending, () => {

        }).addCase(getAllUsersAsync.fulfilled, () => {

        }).addCase(getAllUsersAsync.rejected, () => {

        })

        builder.addCase(deleteUserAsync.pending, () => {

        }).addCase(deleteUserAsync.fulfilled, () => {

        }).addCase(deleteUserAsync.rejected, () => {

        })

        builder.addCase(getSingleUserAsync.pending, () => {

        }).addCase(getSingleUserAsync.fulfilled, () => {

        }).addCase(getSingleUserAsync.rejected, () => {

        })

        builder.addCase(logoutAsync.pending, () => {

        }).addCase(logoutAsync.fulfilled, () => {

        }).addCase(logoutAsync.rejected, () => {

        })

        builder.addCase(changePasswordAsync.pending, () => {

        }).addCase(changePasswordAsync.fulfilled, () => {

        }).addCase(changePasswordAsync.rejected, () => {

        })

        builder.addCase(forgetPasswordAsync.pending, () => {

        }).addCase(forgetPasswordAsync.fulfilled, () => {

        }).addCase(forgetPasswordAsync.rejected, () => {

        })

        builder.addCase(resetPasswordAsync.pending, () => {

        }).addCase(resetPasswordAsync.fulfilled, () => {

        }).addCase(resetPasswordAsync.rejected, () => {

        })

        builder.addCase(updateUserAsync.pending, () => {

        }).addCase(updateUserAsync.fulfilled, () => {

        }).addCase(updateUserAsync.rejected, () => {

        })
    }
})

export const { loginRequest, loginRequestSuccess, loginRequestFail,
    clearError, clearMessage
} = useSlice.actions;
export default useSlice.reducer;