import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: { todo: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    deleteAllTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo === action.payload);
    },
    toggleDone: (state, action) => {
      const { id } = action.payload;
      const todoToToggle = state.todo.find((todo) => todo.id === id);
      if (todoToToggle) {
        todoToToggle.done = !todoToToggle.done; // Toggle the 'done' status
      }
    },
    editTodo: (state, action) => {
      const { id, updatedText } = action.payload;
      const todoToEdit = state.todo.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = updatedText;
      }
    },
  },
});
export const { addTodo, deleteTodo, editTodo, toggleDone, deleteAllTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
