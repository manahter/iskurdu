import HTMLParser from 'fast-html-parser';
import {createSlice} from '@reduxjs/toolkit';

import parseWorks from '../utils/DOM/parseWorks';

const sliceJobs = createSlice({
  name: 'jobs',
  initialState: {},
  reducers: {
    loadItemsByHTML: (state, action) => {
      console.log('State -> jobs -> loadItemsByHTML');
      for (var member in state) delete state[member];
      const doc = HTMLParser.parse(action.payload);
      parseWorks(doc).forEach(e => {
        state[e.flag] = e;
      });
    },
    extendItemsByHTML: (state, action) => {
      console.log('State -> jobs -> extendItemsByHTML');
      const doc = HTMLParser.parse(action.payload);
      parseWorks(doc).forEach(e => {
        state[e.flag] = e;
      });
    },
    clear: state => {
      for (var member in state) delete state[member];
    },
  },
});

export default sliceJobs.reducer;
