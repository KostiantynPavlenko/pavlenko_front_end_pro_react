import { ADD_TODO } from "../actions/actionTypes";

const initialState = {
  todos: [],
  counter: 0
};

export const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        counter: state.counter + 1
      };
    default:
      return state
  }
}