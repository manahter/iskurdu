import {Provider} from 'react-redux';
import React from 'react';

import store from './store';

const DataProvider = ({children}) => (
  <Provider store={store}>{children}</Provider>
);

export default DataProvider;
