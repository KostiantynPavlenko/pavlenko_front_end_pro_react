import { createSlice } from "@reduxjs/toolkit";

import { getAllTodos, addTodo, updateTodoStatus } from "../thunks/todosThunk";

const initialState = {
  todos: [],
  loading: false,
  error: ''
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateTodoStatus.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(updateTodoStatus.fulfilled, (state, action) => {
        state.loading = false;
        const todoIndex = state.todos.findIndex( todo => todo.id === action.payload.id);
        if(todoIndex !== -1) {
          state.todos[todoIndex].completed = action.payload.completed;
        }
      })
      .addCase(updateTodoStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
});

export default todoSlice.reducer;