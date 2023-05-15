import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getProduct: builder.query({
      query: (id: string) => `/products/${id}`,
    }),
    searchProducts: builder.query({
      query: (search: string) => `/products/search?q=${search}`,
    })
  })
  
});

export const { useGetProductsQuery, useGetProductQuery, useSearchProductsQuery } = API