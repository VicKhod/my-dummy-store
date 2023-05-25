import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILoginRequest, IUserResponse } from "../store/slices/userSlice";

export const API = createApi({
  reducerPath: "API",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      return headers;
    },
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/products",
    }),
    getProduct: build.query({
      query: (id: string) => `/products/${id}`,
    }),
    searchProducts: build.query({
      query: (search: string) => `/products/search?q=${search}`,
    }),
    login: build.mutation<IUserResponse, ILoginRequest>({
      query: ({ username, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: ({ username, password })
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useSearchProductsQuery,
  useLoginMutation,
} = API;
