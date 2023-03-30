import {createSlice} from '@reduxjs/toolkit';

const sliceComments = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    load: (state, action) => {
      console.log('State -> comments -> load');
      state.length = 0;
      state.push(...action.payload);
    },
    add: (state, action) => {
      console.log('State -> comments -> add');
      state.push(action.payload);
    },
    update: (state, action) => {
      console.log('State -> comments -> update');
      const index = state.findIndex(e => e.time === action.payload.time);
      if (index > -1) state[index] = action.payload;
    },
    remove: (state, action) => {
      console.log('State -> comments -> remove');
      const index = state.findIndex(e => e.time === action.payload.time);
      if (index > -1) state.splice(index, 1);
    },
  },
});

export default sliceComments.reducer;
