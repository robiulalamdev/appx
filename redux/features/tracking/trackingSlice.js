import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   user: null,
};

const trackingSlice = createSlice({
  name: "tracking slice",
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
  },
});

export const {} = trackingSlice.actions;

export default trackingSlice.reducer;
