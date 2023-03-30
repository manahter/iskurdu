import {createSlice} from '@reduxjs/toolkit';

const sliceSavedJobs = createSlice({
  name: 'savedJobs',
  initialState: {
    //   keyID [str] : JobCard [{key: 1, key, 2}]
    //   keyID [str] : JobCard [{key: 1, key, 2}]
    //   keyID [str] : JobCard [{key: 1, key, 2}]
  },
  reducers: {
    load: (state, action) => {
      console.log('State -> savedJobs -> load');
      action.payload.forEach(item => {
        state[item.flag] = item;
      });
    },
    add: (state, action) => {
      console.log('State -> savedJobs -> add');
      const data = action.payload;
      delete state[data.flag];
      state[data.flag] = data;
    },
    update: (state, action) => {
      console.log('State -> savedJobs -> update');
      const data = action.payload;
      delete state[data.flag];
      state[data.flag] = data;
    },
    remove: (state, action) => {
      console.log('State -> savedJobs -> remove');
      delete state[action.payload.flag];
    },
  },
});

export default sliceSavedJobs.reducer;
