import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67bf3f94b2320ee05013207a.mockapi.io";

const getTasks = createAsyncThunk("tasks/getTasks", async (_, thunkApi) => {
  try {
    const response = await axios.get("/todoList");
    // console.log(response)
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

const addTask = createAsyncThunk("tasks/addTask", async (text, thunkApi) => {
  try {
    const response = await axios.post("/todoList", {
      id: nanoid(),
      text,
      completed: false,
    });
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (idTaskToDelete, thunkApi) => {
    try {
      const response = await axios.delete(`/todoList/${idTaskToDelete}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const completeTask = createAsyncThunk(
  "tasks/completeTask",
  async ({ isTaskComplete, task }, thunkApi) => {
    try {
      const response = await axios.put(`/todoList/${task.id}`, {
        id: task.id,
        text: task.text,
        completed: isTaskComplete,
      });
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export { getTasks, addTask, deleteTask, completeTask };
