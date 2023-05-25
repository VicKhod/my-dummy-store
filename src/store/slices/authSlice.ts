import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./userSlice";

export interface IAuthSlice {
  user: IUser;
  isAuth: boolean;
  pending?: boolean;
}

const initialState: IAuthSlice = {
  user: {
    username: "",
    token: "",
  },
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setlogin: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    setlogout: (state) => {
      state.isAuth = false;
      state.user = {
        username: "",
        token: "",
      };
    },
  },
});

export const { setlogin, setlogout } = authSlice.actions;
export default authSlice.reducer;
