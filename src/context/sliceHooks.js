import {createSlice} from '@reduxjs/toolkit';

const sliceHooks = createSlice({
  name: 'hooks',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      console.log('State -> hooks -> setLoading: ', action.payload);
      state.loading = action.payload;
    },
    setError: (state, action) => {
      console.log('State -> hooks -> setError: ', action.payload);
      state.error = action.payload;
    },
  },
});

export const {setLoading, setError} = sliceHooks.actions;
export default sliceHooks.reducer;
