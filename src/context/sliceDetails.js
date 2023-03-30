import {createSlice} from '@reduxjs/toolkit';
import HTMLParser from 'fast-html-parser';

import parseDetails from '../utils/DOM/parseDetails';

const sliceDetails = createSlice({
  name: 'details',
  initialState: {
    flag: '',
    phones: [],
    emails: [],
    ctlGenelSartlar: '',
    ctlGenelSartlar2: '',
    ctlOgrenimAsgari: '',
    ctlOgrenimAzami: '',
    repeaterMeslek_ctl01_ctlMeslekLabel: '',
    repeaterMeslek_ctl01_ctlMeslekDeneyimSuresiLabel: '',
    repeaterOgrGenelFakulte_ctl01_ctlGenelBirimAdiLabel: '',
    repeaterOgrGenelFakulte_ctl01_ctlGenelBolumAdiLabel: '',
    repeaterOgrGenelFakulte_ctl01_ctlGenelOgrenimSeviyesiLabel: '',
  },
  reducers: {
    loadDetailsByHTML: (state, action) => {
      console.log('State -> details -> loadDetailsByHTML');
      const doc = HTMLParser.parse(action.payload);
      Object.keys(state).forEach(key => {
        if (key !== 'flag') state[key] = parseDetails(doc, key);
      });

      state.phones = extractExpression(
        state.ctlGenelSartlar,
        /(?:[-+() ]*\d){10,13}/gm,
      );

      state.emails = extractExpression(
        state.ctlGenelSartlar,
        /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
      );
    },
    setFlag: (state, action) => {
      state.flag = action.payload;
      console.log('State -> details -> setFlag:', state.flag);
    },
  },
});

export default sliceDetails.reducer;

const extractExpression = (text, re) => {
  const matches = text.match(re);

  const items = matches
    ? matches.map(function (s) {
        return s.trim();
      })
    : [];

  return [...new Set(items)];
};
