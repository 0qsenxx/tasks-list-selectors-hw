import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67bf3f94b2320ee05013207a.mockapi.io";

const setStatusFilter = createAsyncThunk(
  "filters/setStatusFilter",
  async (value, thunkApi) => {
    try {
      const response = await axios.put(`/filters/0`, {
        id: "0",
        status: value,
      });
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export { setStatusFilter };
