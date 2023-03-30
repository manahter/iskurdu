import {createSlice} from '@reduxjs/toolkit';

const sliceSearchFavs = createSlice({
  name: 'searchFavs',
  initialState: {
    // keyID [str] : JobCard [{key: 1, key, 2}]
    // keyID [str] : JobCard [{key: 1, key, 2}]
    // keyID [str] : JobCard [{key: 1, key, 2}]
  },
  reducers: {
    load: (state, action) => {
      console.log('State -> searchFavs -> load');

      action.payload.forEach(item => {
        state[item.time] = item;
      });
    },
    add: (state, action) => {
      console.log('State -> searchFavs -> add');
      state[action.payload.time] = action.payload;
    },
    remove: (state, action) => {
      console.log('State -> searchFavs -> remove');
      delete state[action.payload.time];
    },
  },
});

export default sliceSearchFavs.reducer;
