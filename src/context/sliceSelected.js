import {createSlice} from '@reduxjs/toolkit';

const sliceSelected = createSlice({
  name: 'selected',
  initialState: {
    work: {},
    options: {},
    totalJobs: 0,
  },
  reducers: {
    setWork: (state, action) => {
      console.log('State -> selected -> setWork');
      state.work = {...action.payload};
    },
    setOptions: (state, action) => {
      console.log('State -> selected -> setOptions');
      state.options = {...action.payload};
    },
    resetOptions: state => {
      state.options = {};
    },

    loadTotalWorksByHTML: (state, action) => {
      let total = action.payload.match(/(?<=Toplam Kayıt: ).*?(?=\<)/g);
      console.log('State -> selected -> loadTotalWorksbyHTML>', total);

      // Sayfadaki iş ilanı sayısını bulmak için, son başvuru tarihi sayısına bakıyoruz :)
      state.totalJobs = total
        ? Number(total[0])
        : (action.payload.match(/_ctlSonBasvuruTarihi/g) || []).length;
    },
    clearTotalWorks: state => {
      console.log('State -> selected -> clearTotalWorks');
      state.totalJobs = 0;
    },
  },
});

export default sliceSelected.reducer;
