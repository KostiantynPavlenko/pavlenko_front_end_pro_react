import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

export const getAllTodos = createAsyncThunk(
  'todos/getAllTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}?_limit=10`);

      if(!response.ok) {
        throw new Error('Failed to fetch todos');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }

  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async ({title, completed}, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify({
          title,
          completed
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      });

      if(!response.ok) {
        throw new Error('Failed to add todo');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const updateTodoStatus = createAsyncThunk(
  'todos/updateTodoStatus',
  async({id, completed}, { rejectWithValue }) => {
    if (id === 201) {
      return rejectWithValue("Fake todo can't be updated");
    }
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({completed}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })

      if(!response.ok) {
        throw new Error('Failed to update todo');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)