import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/tasksSlice";
import { filtersReducer } from "./filters/filtersSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

export { store };
