import { createSlice } from "@reduxjs/toolkit";
import "firebase/auth";
//import { useEffect } from "react";

//初期状態
const initialState = {
  isSignedIn: false,
  authId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isSignedIn = true;
      state.authId = action.payload;
    },
    signOut: (state) => {
      state.isSignedIn = false;
      state.authId = null;
    },
  },
});

export const { setUser, signOut } = authSlice.actions;
export default authSlice.reducer;
