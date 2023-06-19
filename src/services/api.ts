import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILoginRequest, IUser } from "../store/slices/userSlice";
import { IProduct } from "../store/slices/productSlice";

export const API = createApi({
  reducerPath: "API",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => "/products",
    }),
    getProduct: build.query<IProduct, string>({
      query: (id: string) => `/products/${id}`,
    }),
    searchProducts: build.query({
      query: (search: string) => `/products/search?q=${search}`,
    }),
    login: build.mutation<IUser, ILoginRequest>({
      query: ({ username, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { username, password },
      }),
    }),
   
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useSearchProductsQuery,
  useLoginMutation,
} = API;
