import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { server } from '../../constants/config';

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${server}/`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Chat", "Message", "User"],
    endpoints: (builder) => ({
        chatDetails: builder.query({
            query: ({ chatId, populate = true }) => {
                let url = `chat/${chatId}`;
                if (populate) url += "?populate=true"
                return {
                    url,
                    credentials: "include"
                }
            },
            providesTags: ["Chat"]
        }),
        getMessages: builder.query({
            query: ({ chatId }) => ({
                url: `getMessages/${chatId}`,
                method: 'GET',
                credentials: "include"
            }),
            providesTags: ["Message", "Chat"]
        }),

        sendMessage: builder.mutation({
            query: ({ chatId, content }) => ({
                url: `messages/${chatId}`,
                method: 'POST',
                body: { msgText: content }
            }),
            invalidatesTags: ['Message', "Chat"]
        }),

        searchUsers: builder.query({
            query: (query) => ({
                url: `search?q=${encodeURIComponent(query)}`,
                method: 'GET'
            }),
            providesTags: ["User"]
        })
    })

})


export default api;
export const { useChatDetailsQuery,
    useGetMessagesQuery,
    useSendMessageMutation, useSearchUsersQuery
} = api;