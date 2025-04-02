import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Post, PostDto } from "../reducers/postSlice";
import { server } from "../../constants/config";

export const getPostOfFollwoing = createAsyncThunk(
    'posts',
    async ({ }: { args: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get(`${server}/getfollowinguserposts`, {
                withCredentials: true,
                headers:{
                    'Authorization': `Bearer ${token}`
                },
            });
            const response = data as PostDto
            return response
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("Something went wrong")
        }
    }
)


export const savePostAsync = createAsyncThunk(
    'save_post',
    async ({ postId }: { postId: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get(`${server}/savePost/${postId}`, {
                withCredentials: true,
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
            return res
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return (rejectWithValue("Something went wrong"))
        }
    }
)

export const likePostAsync = createAsyncThunk(
    'like_post',
    async ({ postId }: { postId: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const res = axios.get(`${server}/likeAndUnlikePost/${postId}`, {
                withCredentials: true,
                headers:{
                    'Authorization': `Bearer ${token}`
                },
            })
            return res
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("Something went wrong")
        }
    }
)


export const createPostAsync = createAsyncThunk(
    'createPost',
    async ({ content, title, Location, file }: { content: string, title: string, Location: string, file: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.post(`${server}/createPost`, {
                content, title, Location, file
            }, {
                withCredentials: true,
                headers:{
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



export const getAllPostWithUserAsync = createAsyncThunk(
    'getAllPostWithUser',
    async ({ }: { args: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get(`${server}/getAllPostWithUsers`, {
                withCredentials: true,
                headers:{
                    'Authorization': `Bearer ${token}`
                },
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


export const getUserAllPost = createAsyncThunk(
    'getUserAllPost',
    async ({ userId }: { userId: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get(`${server}/getUserAllPosts/${userId}`, {
                withCredentials: true,
                headers:{
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


export const commentOnPostAsync = createAsyncThunk(
    'commentOnPost',
    async ({ postId, comment }: { postId: string, comment: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.post(`${server}/commentonpost/${postId}`, {
                comment
            }, {
                withCredentials: true,
                headers:{
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

export const getPostByIdAsync = createAsyncThunk(
    'getSinglePost',
    async ({ postId }: { postId: string }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const {data} = await axios.get<Post>(`${server}/singlepost/${postId}`, {
                withCredentials: true,
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            return data
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("internal error ")
        }
    }
)


