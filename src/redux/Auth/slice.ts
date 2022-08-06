import { createSlice } from "@reduxjs/toolkit";
import { fetchAuth, fetchToken, fetchRegister } from "./acyncAction";
import { AuthSliceProps } from "./types";

const initialState: AuthSliceProps = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });
    builder.addCase(fetchToken.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchToken.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });
    builder.addCase(fetchRegister.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });
  },
});
export const { logout } = authSlice.actions;
export const authReduser = authSlice.reducer;
