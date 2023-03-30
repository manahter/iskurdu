import searchHistoryReducer from '../hooks/useSearchHistory/searchHistoryReducer';
import searchFavsReducer from '../hooks/useSearchFavs/searchFavsReducer';
import savedJobsReducer from '../hooks/useSavedJobs/savedJobsReducer';
import commentsReducer from '../hooks/useComments/commentsReducer';
import {configureStore} from '@reduxjs/toolkit';

import savedJobStatusReducer from './sliceSavedJobStatus';
import authReducer from '../hooks/useAuth/authReducer';
import selectedReducer from './sliceSelected';
import requestReducer from './sliceRequest';
import optionsReducer from './sliceOptions';
import hooksReducer from './sliceHooks';
import worksReducer from './sliceJobs';
import utilsReducer from './sliceUtils';
import detailsReducer from './sliceDetails';

const store = configureStore({
  reducer: {
    request: requestReducer,
    options: optionsReducer,
    selected: selectedReducer,
    hooks: hooksReducer,
    jobs: worksReducer,
    utils: utilsReducer,
    details: detailsReducer,
    savedJobStatus: savedJobStatusReducer,

    user: authReducer,
    comments: commentsReducer,
    savedJobs: savedJobsReducer,
    searchFavs: searchFavsReducer,
    searchHistory: searchHistoryReducer,
  },
});

export default store;
