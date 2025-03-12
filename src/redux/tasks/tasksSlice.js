import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getTasks, addTask, deleteTask, completeTask } from "./tasksOperations";

const tasksInitialState = [
  { id: nanoid(), text: "Learn HTML and CSS", completed: true },
  { id: nanoid(), text: "Get good at JavaScript", completed: true },
  { id: nanoid(), text: "Master React", completed: false },
  { id: nanoid(), text: "Discover Redux", completed: false },
  { id: nanoid(), text: "Build amazing apps", completed: false },
];

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, handlePending)
      .addCase(getTasks.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.tasks = action.payload;
        state.isLoading = false;
      })
      .addCase(getTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks = [...state.tasks, action.payload];
        state.isLoading = false;
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        // const findIdx = state.tasks.findIndex(
        //   (task) => task.id === action.payload.id
        // );
        // state.tasks.splice(findIdx, 1)
        state.tasks = state.tasks.filter(
          (task) => task.id !== action.payload.id
        );
      })
      .addCase(completeTask.pending, handlePending)
      .addCase(completeTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((task) =>
          action.payload.id === task.id
            ? { ...task, completed: action.payload.isComplete }
            : task
        );
      });
  },
  // reducers: {
  //   addTask: {
  //     reducer(state, action) {
  //       return {
  //         ...state,
  //         tasks: state.tasks.concat(action.payload),
  //       };
  //     },
  //     prepare(text) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           text,
  //           completed: false,
  //         },
  //       };
  //     },
  //   },

  //   deleteTask: {
  //     reducer(state, action) {
  //       return {
  //         ...state,
  //         tasks: state.tasks.filter((task) => task.id !== action.payload),
  //       };
  //     },
  //     prepare(idTaskToDelete) {
  //       return { payload: idTaskToDelete };
  //     },
  //   },
  //   completeTask: {
  //     reducer(state, action) {
  //       return {
  //         ...state,
  //         tasks: state.tasks.map((task) =>
  //           action.payload.activeTask.id === task.id
  //             ? { ...task, completed: action.payload.isComplete }
  //             : task
  //         ),
  //       };
  //     },
  //     prepare({ isTaskComplete, task }) {
  //       return {
  //         payload: {
  //           isComplete: isTaskComplete,
  //           activeTask: task,
  //         },
  //       };
  //     },
  //   },
  // },
});

// export const { addTask, deleteTask, completeTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
