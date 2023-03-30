import {createSlice} from '@reduxjs/toolkit';

const sliceSearchHistory = createSlice({
  name: 'searchHistory',
  initialState: {
    // keyID [str] : JobCard [{key: 1, key, 2}]
    // keyID [str] : JobCard [{key: 1, key, 2}]
    // keyID [str] : JobCard [{key: 1, key, 2}]
  },
  reducers: {
    load: (state, action) => {
      console.log('State -> searchHistory -> load');

      action.payload.forEach(item => {
        state[item.time] = item;
      });
    },
    add: (state, action) => {
      console.log('State -> searchHistory -> add');
      state[action.payload.time] = action.payload;
    },
    remove: (state, action) => {
      console.log('State -> searchHistory -> remove');
      delete state[action.payload.time];
    },
  },
});

export default sliceSearchHistory.reducer;
