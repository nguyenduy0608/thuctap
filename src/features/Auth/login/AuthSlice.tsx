import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
// let initialState: any = {
//   isLoading: true,
//   dialogLoading: false,
//   userInfo: null,
// };

export const getUserInfoAction = createAsyncThunk(
  "auth/info",
  async (token) => {
    const res = await axios.get(
      "https://dev.httapi.winds.vn/api/v1/admin/session/me"
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`, // Truyền token vào header Authorization
      //     },
      //   }
    );

    return res.data;
  }
);

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setLoading: (state, action) => {},
//     setData: (state, action) => {
//       state.data = action.payload;
//     },
//     setError: (state, action) => {},
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getUserInfoAction.pending, (state, action) => {
//       state.isLoading = true;
//       return state;
//     });
//     builder.addCase(getUserInfoAction.fulfilled, (state, action) => {
//       state.userInfo = action.payload;
//       state.isLoading = false;
//       return state;
//     });
//     builder.addCase(getUserInfoAction.rejected, (state, action) => {
//       state.isLoading = false;
//       state.userInfo = null;
//       Cookies.remove(SESSION_ID);
//       return state;
//     });
//     builder.addCase(logoutAction.pending, (state, action) => {
//       state.isLoading = true;
//       return state;
//     });
//     builder.addCase(logoutAction.fulfilled, (state, action) => {
//       state = initialState;
//       Cookie.remove(SESSION_ID);
//       window.location.href = "/";
//       return state;
//     });
//     builder.addCase(logoutAction.rejected, (state, action) => {
//       state.isLoading = false;
//       Cookie.remove(SESSION_ID);
//       window.location.href = "/";
//       return state;
//     });
//   },
// });

export const selectCount = (state: any) => state.account;
// export const { actions, reducer } = authSlice;

// export default reducer;
export const SESSION_ID = "session_id";
