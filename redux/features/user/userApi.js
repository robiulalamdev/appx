import { api } from "../../api/api";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: ({ data }) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["users"],
    }),

    createUser: builder.mutation({
      query: ({ data }) => ({
        url: `/auth/register`,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["users"],
    }),
  }),
});

export const { usePostLoginMutation, useCreateUserMutation } = usersApi;
