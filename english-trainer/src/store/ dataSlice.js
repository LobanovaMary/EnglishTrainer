import { createSlice } from "@reduxjs/toolkit";

const list =
  localStorage.getItem("date") !== null
    ? JSON.parse(localStorage.getItem("date"))
    : [];

const dataSlice = createSlice({
  name: "dictionary",
  initialState: {
    data: list,
  },

  reducers: {
    addItem: (state, action) => {
      state.data.unshift(action.payload);
      localStorage.setItem("date", JSON.stringify(state.data));
    },
    removeItem: (state) => {
      state.data -= 1;
    },
  },
});

export const { addItem, removeItem } = dataSlice.actions;

export default dataSlice.reducer;
