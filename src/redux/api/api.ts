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
    tagTypes: ["Chat"],
    endpoints: (builder) => ({
        chatDetails: builder.query({
            query: ({ chatId, populate = false }) => {
                let url = `chat/${chatId}`;
                if (populate) url += "?populate=true"
                return {
                    url,
                    credentials: "include"
                }
            },
            providesTags: ["Chat"]
        })
    })
});


export default api;
export const { useChatDetailsQuery } = api;