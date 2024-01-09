import { createSlice } from "@reduxjs/toolkit";

export interface IRootState {
  user: {
    email: string | null;
    id: string | null;
    name: string | null;
    role: string | null
  };
  // accessToken: string | null;
}

export const initialState: IRootState = {
  user: {
    email: null,
    id: null,
    name: null,
    role: null
  },
  // accessToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedInfo: (state, action) => {
      state.user.email = action.payload.email;
      state.user.id = action.payload._id;
      state.user.name = action.payload.name;
      state.user.role = action.payload.role;
    },
  },
});

export const { setLoggedInfo } = userSlice.actions;

export default userSlice.reducer;