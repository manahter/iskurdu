import React from 'react';
import Router from './Router';
import DataProvider from './context/DataProvider';

export default () => (
  <DataProvider>
    <Router />
  </DataProvider>
);
