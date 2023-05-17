import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../services/api";
import { AxiosError } from "axios";
import { IProduct } from "./productSlice";
import { act } from "react-dom/test-utils";

export const getAllProducts = createAsyncThunk(
  "allProducts/getAllProducts",
  async (_, { rejectWithValue }) => {
    // try {
    //   const res = await API.get(`/products`);
    //   return res.data;
    // } catch (error) {
    //   const err = error as AxiosError;
    //   if (!err.response) {
    //     throw err;
    //   }
    //   return rejectWithValue(err.response?.data);
    // }
    const res = await API.get(`/products`);
    return res.data;
  }
);

export interface IAllProducts {
  products: IProduct[];
  total?: number;
  skip?: number;
  limit?: number;
}
const allProductsSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: {
      // id: 0,
      // title: 'title',
      // description: 'string',
      // price: 0,
      // discountPercentage: 0,
      // rating: 0,
      // stock: 0,
      // brand: 'string',
      // category: 'string',
      // thumbnail: 'string',
      // images: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>): void => {
          state.products = action.payload;
        }
      );
  },
});

export default allProductsSlice.reducer;
