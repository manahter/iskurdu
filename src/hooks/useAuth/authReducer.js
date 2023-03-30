import {createSlice} from '@reduxjs/toolkit';

const sliceAuth = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    load: (state, action) => {
      console.log('State -> auth -> load');
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key];
      });
    },
  },
});

export default sliceAuth.reducer;
