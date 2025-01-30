import { createSlice } from "@reduxjs/toolkit";
import { commentOnPostAsync, createPostAsync, getAllPostWithUserAsync, getPostByIdAsync, getPostOfFollwoing, getUserAllPost, likePostAsync, savePostAsync } from "../actions/postAction";
import { User } from "./userSlice";

export interface PostDto {
    success: boolean;
    posts: Post[];
}

export interface Post {
    image: Image;
    _id: string;
    title: string;
    content: string;
    userId: User;
    like: any[];
    CreatedAt: Date;
    comments: any[];
    __v: number;
    isLike: boolean;
    isSave: boolean;
    Location: string;
}

export interface Image {
    public_Id: string;
    url: string;
}

export interface PostState {
    posts: Post[];
    loading: boolean;
    error: any;
    singlePost: Post | null;
}

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null,
    singlePost: null,
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        postRequest: (state) => {
            state.loading = true;
        },
        postRequestSuccess: (state, action) => {
            state.loading = false;
            state.posts = action.payload.posts;
        },
        postRequestFail: (state, action) => {
            state.loading = false,
                state.error = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPostOfFollwoing.pending, (state) => {
            state.loading = true;
        }).addCase(getPostOfFollwoing.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload.posts;
        }).addCase(getPostOfFollwoing.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(likePostAsync.pending, () => {
        }).addCase(likePostAsync.fulfilled, () => {
        }).addCase(likePostAsync.rejected, () => {
        })

        builder.addCase(savePostAsync.pending, () => {
        }).addCase(savePostAsync.fulfilled, () => {
        }).addCase(savePostAsync.rejected, () => {
        })

        builder.addCase(createPostAsync.pending, () => {

        }).addCase(createPostAsync.fulfilled, () => {

        }).addCase(createPostAsync.rejected, () => {

        })

        builder.addCase(getAllPostWithUserAsync.pending, () => {

        }).addCase(getAllPostWithUserAsync.fulfilled, () => {

        }).addCase(getAllPostWithUserAsync.rejected, () => {

        })

        builder.addCase(getUserAllPost.pending, () => {

        }).addCase(getUserAllPost.fulfilled, () => {

        }).addCase(getUserAllPost.rejected, () => {

        })

        builder.addCase(commentOnPostAsync.pending, () => {

        }).addCase(commentOnPostAsync.fulfilled, () => {

        }).addCase(commentOnPostAsync.rejected, () => {

        })

        builder.addCase(getPostByIdAsync.pending, (state) => {
            state.loading = true
        }).addCase(getPostByIdAsync.fulfilled, (state, action) => {
            const post = action.payload
            state.loading = false;
            state.singlePost = post
        }).addCase(getPostByIdAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export const { postRequest, postRequestFail, postRequestSuccess } = postSlice.actions;
export default postSlice.reducer;