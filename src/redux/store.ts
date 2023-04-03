import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slice/root.slice";

const appReducer = {
  root: rootReducer,
};
const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
