import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
    setLogin: (state, action: PayloadAction<IUser>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.isAuth = false;
      state.user = {
        username: "",
        token: "",
      };
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
