import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API = createApi({
  reducerPath: 'API',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => '/products',
      // providesTags: (result) => result
      // ? [...result.map(({ id }) => ({ type: 'Products', id })),] 
      //   : [{ type: 'Products' , id: 'LIST' }]
    }),
    getProduct: build.query({
      query: (id: string) => `/products/${id}`,
    }),
    searchProducts: build.query({ 
      query: (search: string) => `/products/search?q=${search}`,
    }),
    loginUser: build.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials({
          username: '',
          password: '',
        }),
      }),
      // invalidatesTags: [type: 'Products', id: 'LIST'],
      transformResponse: (response: any, meta, arg) => response.data,
      transformErrorResponse: (response: {status: string | number}, meta, arg) => response.status
    })
  })
  
});

export const { useGetProductsQuery, useGetProductQuery, useSearchProductsQuery, useLoginUserMutation } = API