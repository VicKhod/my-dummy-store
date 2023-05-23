import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypeRootState } from "../store";
import { LoginRequest, UserResponse } from "../store/slices/userSlice";

export const API = createApi({
  reducerPath: "API",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as TypeRootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
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
    login: build.mutation<UserResponse, LoginRequest>({
      query: ({ username, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: JSON.stringify({ username, password }),
      }),
    }),
    protected: build.mutation<{ message: string }, void>({
      query: () => "protected",
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useSearchProductsQuery,
  useLoginMutation,
  useProtectedMutation,
} = API;
