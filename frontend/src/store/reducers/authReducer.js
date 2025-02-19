import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../../utils/config";
import { jwtDecode } from "jwt-decode";

export const customer_register = createAsyncThunk(
  "auth/customer_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        `${base_url}/api/customer/customer-register`,
        info
      );
      localStorage.setItem("customerToken", data.token);
      // console.log(data)
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// End Method

export const customer_login = createAsyncThunk(
  "auth/customer_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        `${base_url}/api/customer/customer-login`,
        info
      );
      localStorage.setItem("customerToken", data.token);
      // console.log(data)
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// End Method

const decodeToken = (token) => {
  if (token) {
    const userInfo = jwtDecode(token);
    const expireTime = new Date(userInfo.exp * 1000);
    if (new Date() > expireTime) {
      localStorage.removeItem("customerToken");
      return "";
    } else {
      return userInfo;
    }
  } else {
    return "";
  }
};
// End Method

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    loader: false,
    userInfo: decodeToken(localStorage.getItem("customerToken")),
    errorMessage: "",
    successMessage: "",
    token: localStorage.getItem("customerToken"),
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
    user_reset: (state, _) => {
      state.userInfo = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(customer_register.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(customer_register.rejected, (state, { payload }) => {
        state.errorMessage = payload.error;
        state.loader = false;
      })
      .addCase(customer_register.fulfilled, (state, { payload }) => {
        const userInfo = decodeToken(payload.token);
        state.successMessage = payload.message;
        state.loader = false;
        state.userInfo = userInfo;
        state.token = payload.token;
      })

      .addCase(customer_login.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(customer_login.rejected, (state, { payload }) => {
        state.errorMessage = payload.error;
        state.loader = false;
      })
      .addCase(customer_login.fulfilled, (state, { payload }) => {
        const userInfo = decodeToken(payload.token);
        state.successMessage = payload.message;
        state.loader = false;
        state.userInfo = userInfo;
        state.token = payload.token;
      });
  },
});
export const { messageClear, user_reset } = authReducer.actions;
export default authReducer.reducer;
