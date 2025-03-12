import { createSlice } from "@reduxjs/toolkit";
import { setStatusFilter } from "./filtersOperations";

const filtersInitialState = {
  status: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  extraReducers: (builder) => {
    builder.addCase(setStatusFilter.fulfilled, (state, action) => {
      state.status = action.payload.status;
    });
  },
  // reducers: {
  //   setStatusFilter: {
  //     reducer(state, action) {
  //       return {
  //         ...state,
  //         status: action.payload,
  //       };
  //     },
  //     prepare(value) {
  //       return { payload: value };
  //     },
  //   },
  // },
});

export const filtersReducer = filtersSlice.reducer;
