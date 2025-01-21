import { createSlice } from "@reduxjs/toolkit";
import { commentOnPostAsync, createPostAsync, getAllPostWithUserAsync, getPostOfFollwoing, getUserAllPost, likePostAsync, savePostAsync } from "../actions/postAction";

export interface PostDto {
    success: boolean;
    posts: Post[];
}

export interface Post {
    image: Image;
    _id: string;
    title: string;
    content: string;
    userId: string;
    like: any[];
    CreatedAt: Date;
    comments: any[];
    __v: number;
    isLike:boolean;
    isSave:boolean
}

export interface Image {
    public_Id: string;
    url: string;
}

export interface PostState {
    posts: Post[];
    loading: boolean;
    error: any;
}

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
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
        builder.addCase(likePostAsync.pending, (state) => {
        }).addCase(likePostAsync.fulfilled, (state) => {
        }).addCase(likePostAsync.rejected, (state) => {
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
    }
})

export const { postRequest, postRequestFail, postRequestSuccess } = postSlice.actions;
export default postSlice.reducer;