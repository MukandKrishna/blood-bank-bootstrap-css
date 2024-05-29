import { createSlice } from "@reduxjs/toolkit";
import {
  userLogin,
  userRegister,
  userUpdate,
  getUser,
  updateUser,
} from "./authActions";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  user: null,
  token,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login user
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // REGISTER user
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
    });
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // update user
    builder.addCase(userUpdate.fulfilled, (state, { payload }) => {
      state.loading = false;
      // state.user = payload.token;
      state.user = payload.user;
    });

    // authSlice.js

    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      // state.user = payload.user;
    });

    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });
  },
});

export default authSlice.reducer;

// timestamp 3:53:00
