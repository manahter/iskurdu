import {createSlice} from '@reduxjs/toolkit';

const sliceSavedJobStatus = createSlice({
  name: 'savedJobStatus',
  initialState: {
    //   keyID [num] : {id: 1, optionName: "Genel" groupName: "Genel"}
    //   keyID [num] : {id: 2, optionName: "Genel" groupName: "Genel"}
    //   keyID [num] : {id: 3, optionName: "Genel" groupName: "Genel"}
  },
  reducers: {
    load: (state, action) => {
      console.log('State -> sliceSavedJobStatus -> load');
      action.payload.forEach(item => {
        state[item.id] = item;
      });
    },
  },
});

export default sliceSavedJobStatus.reducer;
