import { createSlice } from '@reduxjs/toolkit';

export interface IAuthSlice {
  user: {},
  isAuth: boolean;
  token: string;
  pending?: boolean;
}

const initialState: IAuthSlice = {
  user: {},
  token: '',
  isAuth: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => { 
      state.isAuth = true;
      state.user = action.payload;
      state.token = action.payload;
    },
    setLogout: (state) => {
      state.isAuth = false;
      state.user = {};
      state.token = '';
    }
  }
});

export const { setLogin, setLogout  } = authSlice.actions;
export default authSlice.reducer;