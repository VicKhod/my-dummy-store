import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILoginRequest, IUser } from "./userSlice";
import { API } from "../../services/api";
import { AxiosError } from "axios";

export const getAccess = createAsyncThunk(
  "auth/getAccess",
  async (data: string[], { rejectWithValue }) => {
    const [username, password] = data
    try {
      const res = await API.post(`/auth/login`, { username, password });
      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
    }
  }
);

export interface IAuthSlice {
  user: IUser;
  isAuth: boolean;
  pending?: boolean;
}

const initialState: IAuthSlice = {
  user: {
    username: "Lol",
    token: "Kekovich",
  },
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccess.pending, (state) => {
        state.pending = true;
      })
      .addCase(getAccess.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuth = true;
        state.pending = false;
      });
  },
});

export default authSlice.reducer;
