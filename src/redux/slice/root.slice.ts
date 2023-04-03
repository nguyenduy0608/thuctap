import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    root: null,
  },
  reducers: {
    setRoot: (state, action) => {
      state.root = action.payload;
    },
  },
});
const { reducer: rootReducer, actions } = rootSlice;
export const { setRoot } = actions;
export default rootReducer;
