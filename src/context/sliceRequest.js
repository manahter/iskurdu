import {createSlice} from '@reduxjs/toolkit';
import HTMLParser from 'fast-html-parser'; // 'npm install util' bağımlılığı da var.

const sliceRequest = createSlice({
  name: 'request',
  initialState: {
    __EVENTTARGET: 'ctl04$ctlAcikIsPageCommand$CommandItem_Search',
    __EVENTARGUMENT: '',
    __EVENTVALIDATION: '',
    __VIEWSTATE: '',
    __VIEWSTATEGENERATOR: '',
    __VIEWSTATEENCRYPTED: '',
    __LASTFOCUS: '',
    ctl04$ctlPageTop$ctlMenu$hdnMenuParameters: '',
    ctl04$ctlArananMetin2: '',
    ctl04$ctlCalismaYeri: '1',
    ctl04$ctlIl: '',
    ctl04$ctlIlce: '',
    ctl04$ctlIlanTarihi: '1',
    ctl04$ctlIsgucuIstemiNo: '',
    ctl04$ctlMeslek$ctlMeslek_TextBox: '',
    ctl04$ctlMeslek$ctlMeslek_MeslekKayitNo: '',
    ctl04$ctlMeslek$ctlMeslek_MeslekUzmanlikKayitNo: '',
    ctl04$ctlOgrenimDurum: '',
    ctl04$ctlIsyeriTuru: '',
    ctl04$ctlKisiselDurum: '',
    ctl04$ctlCalismaSekli: '',
    ctl04$ctlIsyeriUnvan: '',
    ctl04$ctlDataPagerDetay$txtCurrentPage: '',
    ctl04$ctlAramaKayitAdi2: '',
  },
  reducers: {
    loadItemsByHTML: (state, action) => {
      console.log('State -> request -> loadDetailsByHTML');
      const doc = HTMLParser.parse(action.payload);
      Object.keys(state).forEach(key => {
        // readValuebyId -> DOM'un ID numarası ile varsa VALUE değerlerini alıyoruz
        try {
          state[key] = doc
            .querySelector(`#${key}`)
            .rawAttrs.split('value="')[1]
            .split('"')[0];
        } catch (err) {
          // rawAttrs özelliği yoktur.
        }
      });
    },
    clear: state => {
      Object.keys(state).forEach(key => {
        key.startsWith('c') ? (state[key] = '') : null;
      });
      state.ctl04$ctlCalismaYeri = '1';
      state.ctl04$ctlIlanTarihi = '1';
    },
    setMetin: (state, action) => {
      console.log('State -> request -> setMetin: ', action.payload);
      state.ctl04$ctlArananMetin2 = action.payload;
    },
    setIl: (state, action) => {
      console.log('State -> request -> setIl: ', action.payload);
      state.ctl04$ctlIl = action.payload;
    },
    setIlce: (state, action) => {
      console.log('State -> request -> setIlce: ', action.payload);
      state.ctl04$ctlIlce = action.payload;
    },
    setIlanTarihi: (state, action) => {
      console.log('State -> request -> setIlanTarihi: ', action.payload);
      state.ctl04$ctlIlanTarihi = action.payload;
    },
    setOgrenimDurum: (state, action) => {
      console.log('State -> request -> setOgrenimDurum: ', action.payload);
      state.ctl04$ctlOgrenimDurum = action.payload;
    },
    setIsyeriTuru: (state, action) => {
      console.log('State -> request -> setIsyeriTuru: ', action.payload);
      state.ctl04$ctlIsyeriTuru = action.payload;
    },

    goSearch: state => {
      state.__EVENTTARGET = 'ctl04$ctlAcikIsPageCommand$CommandItem_Search';
    },
    goNextPage: state => {
      state.__EVENTTARGET = 'ctl04$ctlDataPagerDetay$btnNext';
    },
    goPrevPage: state => {
      state.__EVENTTARGET = 'ctl04$ctlDataPagerDetay$btnPrev';
    },
    goLastPage: state => {
      state.__EVENTTARGET = 'ctl04$ctlDataPagerDetay$btnLast';
    },
  },
});

export const {setIl, setIlce} = sliceRequest.actions;

export default sliceRequest.reducer;
