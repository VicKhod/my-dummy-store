
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TypeRootState } from '../store';
import { LoginRequest, UserResponse } from '../store/slices/userSlice';

export const API = createApi({
  reducerPath: 'API',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => '/products',
    }),
    getProduct: build.query({
      query: (id: string) => `/products/${id}`,
    }),
    searchProducts: build.query({ 
      query: (search: string) => `/products/search?q=${search}`,
    })
  })
});

export const authAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/auth',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as TypeRootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: ({ username, password }) => ({
        url: '/login',
        method: 'POST',
        body: JSON.stringify({ username, password }),
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const { useGetProductsQuery, useGetProductQuery, useSearchProductsQuery } = API
export const { useLoginMutation, useProtectedMutation } = authAPI