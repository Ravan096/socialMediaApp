import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../store";
import axios from "axios";
import { FollowDto, SingleUserDto, UserDto } from "../reducers/userSlice";

export const loginAsync = createAsyncThunk(
    'login',
    async ({ email, password }: { email: string, password: string }, { rejectWithValue }) => {
        try {
            if (email === "" || password === "") {
                return rejectWithValue("Please fill all the fields")
            }
            const { data } = await axios.post(`${server}/userLogin`, { Email: email, password: password }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            return data as UserDto

        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("Something went wrong")
        }
    }
)



export const meAsync = createAsyncThunk(
    'me',
    async ({ }: { args: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get(`${server}/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            })
            return data as UserDto
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("something went wrong")
        }
    }
)

export const registerUserAsync = createAsyncThunk(
    'registerUser',
    async ({ FullName, userName, Email, Password }: { FullName: string, userName: string, Email: string, Password: string }, { rejectWithValue }) => {
        try {
            if (FullName === "" || userName === "" || Email === "" || Password === "") {
                return rejectWithValue("Please Fill all the fields")
            }
            const { data }: any = axios.post(`${server}/register`, { FullName, userName, Email, Password }, {
                headers: {
                    'Content-Type': "application/json"
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

export const getAllUsersAsync = createAsyncThunk(
    'getAllUsers',
    async ({ }: { args: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get(`${server}/getUser`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            })
            return data as UserDto
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("something went wrong")
        }
    }
)

export const deleteUserAsync = createAsyncThunk(
    'deleteUser',
    async ({ userId }: { userId: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.delete(`${server}/deleteUser/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
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


export const getSingleUserAsync = createAsyncThunk(
    'getSingleUser',
    async ({ userId }: { userId: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get(`${server}/getSingleUser/${userId}`, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return data as SingleUserDto
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("something went wrong")
        }
    }
)


export const logoutAsync = createAsyncThunk(
    'logout',
    async ({ }: { args: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get(`${server}/logout`, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            localStorage.removeItem('token');
            return data
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue('something went wrong')
        }
    }
)

export const changePasswordAsync = createAsyncThunk(
    'changePassword',
    async ({ oldPassword, newPassword }: { oldPassword: string, newPassword: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.post(`${server}/changepassword`, { oldPassword, newPassword }, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return data
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue('something went wrong')
        }
    }
)


export const forgetPasswordAsync = createAsyncThunk(
    'forgetPassword',
    async ({ email }: { email: string }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${server}/forgetPassword`, { email }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return data
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue('something went wrong')
        }
    }
)


export const resetPasswordAsync = createAsyncThunk(
    'resetPassword',
    async ({ password, userId }: { password: string, userId: string }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`${server}/password/reset/${userId}`, { password }, {
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


export const updateUserAsync = createAsyncThunk(
    'updateUser',
    async ({ file, userName, Email, dob, gender, website, state, bio, mobile }:
        { file: any, userName: string, Email: string, dob: string, gender: string, website: string, state: string, bio: string, mobile: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.post(`${server}/updateUser`,
                { file, userName, Email, bio, dob, gender, state, website, mobile }, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${token}`
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

export const getFollowingFollowersAsync = createAsyncThunk(
    "getFollowingFollowers",
    async ({ userId }: { userId: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get(`${server}/userlist/${userId}`, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            })
            return data as FollowDto
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("Internal error")
        }
    }
)


export const followAndunfollowAsync = createAsyncThunk(
    'follow&unfollow',
    async ({ userId }: { userId: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get(`${server}/follow&unfollow/${userId}`, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return data
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("Internal Error")
        }
    }
)