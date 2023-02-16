import { createSlice, current } from '@reduxjs/toolkit';

const list =
  localStorage.getItem('date') !== null
    ? JSON.parse(localStorage.getItem('date'))
    : [];

const sortValue =
  localStorage.getItem('sort') !== null
    ? JSON.parse(localStorage.getItem('sort'))
    : '';

const dataSlice = createSlice({
  name: 'dictionary',
  initialState: {
    data: list,
    filter: sortValue,
  },

  reducers: {
    addItem: (state, action) => {
      state.data.unshift(action.payload);
      localStorage.setItem('date', JSON.stringify(state.data));
    },
    removeItem: (state, action) => {
      const arr = current(state.data);
      const newArr = [];
      arr.forEach((el) => {
        if (el.id !== +action.payload) newArr.unshift(el);
      });
      state.data = newArr;
      localStorage.setItem('date', JSON.stringify(state.data));
    },
    sortList: (state, action) => {
      if (action.payload !== state.filter) {
        if (action.payload === 'new') {
          state.data = [...state.data].sort((a, b) => b.id - a.id);
        }
        if (action.payload === 'old') {
          state.data = [...state.data].sort((a, b) => a.id - b.id);
        }
        state.filter = action.payload;
        localStorage.setItem('sort', JSON.stringify(action.payload));
      }
    },
  },
});

export const { addItem, removeItem, sortList, findWord } = dataSlice.actions;

export default dataSlice.reducer;
