import { createSlice, current } from "@reduxjs/toolkit";

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
    removeItem: (state, action) => {
      console.log(action.payload);
      const arr = current(state.data);
      const newArr = [];
      arr.forEach((el) => {
        if (el.id !== +action.payload) newArr.unshift(el);
      });
      state.data = newArr;
      localStorage.setItem("date", JSON.stringify(state.data));
    },
  },
});

export const { addItem, removeItem } = dataSlice.actions;

export default dataSlice.reducer;
