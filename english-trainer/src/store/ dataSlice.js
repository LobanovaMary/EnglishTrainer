import {createSlice} from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'dictionary',
  initialState: {
    data: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.data.unshift(action.payload);
    },
    removeItem: (state) => {
      state.data -= 1;
    },
  },
});

export const {addItem, removeItem} = dataSlice.actions;

export default dataSlice.reducer;
