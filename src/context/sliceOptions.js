import HTMLParser from 'fast-html-parser'; // 'npm install util' bağımlılığı da var.
import {createSlice} from '@reduxjs/toolkit';

import parseOptions from '../utils/DOM/parseOptions';

const sliceOptions = createSlice({
  name: 'options',
  initialState: {
    CalismaYeri: [],
    Ulke: [],
    Il: [],
    Ilce: [],
    IlanTarihi: [],
    OgrenimDurum: [],
    IsyeriTuru: [],
    KisiselDurum: [],
  },
  reducers: {
    loadItemsByHTML: (state, action) => {
      console.log('State -> options -> loadDetailsByHTML');
      const doc = HTMLParser.parse(action.payload);
      Object.keys(state).forEach(key => {
        state[key] = parseOptions(doc, key);
      });
    },

    loadIlceByAjax: (state, action) => {
      console.log('State -> options -> loadIlceByAjax');
      try {
        let arrayStr = action.payload.split('(')[1].split(')')[0];

        state.Ilce = JSON.parse('[' + arrayStr + ']')[1].reduce(
          (aku, item) => {
            aku.push({value: String(item[0]), label: item[2]});
            return aku;
          },
          [{value: '', label: '--Tüm İlçeler--'}],
        );
      } catch (error) {
        console.log('State -> options -> ERROR');
        // console.log('Veri istenen şekilde gelmedi');
      }
    },
  },
});

export default sliceOptions.reducer;
