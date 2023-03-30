import {createSlice} from '@reduxjs/toolkit';

const sliceUtils = createSlice({
  name: 'utils',
  initialState: {
    worksPageReload: false,
  },
  reducers: {
    setWorksPageReload: (state, action) => {
      state.worksPageReload = action.payload;
    },
  },
});

export default sliceUtils.reducer;
