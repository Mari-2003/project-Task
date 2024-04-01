import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1/' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: 'login',
        method: 'POST',
        body: userData
      }),
    }),

    signup: builder.mutation({
      query: (userData) => ({
        url: 'signup',
        method: 'POST',
        body: userData
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = api;
