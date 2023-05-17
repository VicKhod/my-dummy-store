import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  id?: number;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  image?: string;
  token?: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 0,
    username: "No name",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
    token: "No token",
  },
  reducers: {
    setLogin: (state, action) => {
      state.username = action.payload;
      state.token = action.payload;
      state.id = action.payload;
      state.email = action.payload;
      state.firstName = action.payload;
      state.lastName = action.payload;
      state.gender = action.payload;
      state.image = action.payload;
    },
  },
});

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;
