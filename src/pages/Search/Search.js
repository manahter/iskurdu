import React from 'react';
import {SafeAreaView} from 'react-native';

import FavSearchSummary from './components/FavSearchSummary';
import HistorySummary from './components/HistorySummary';
import SearchBar from './components/SearchBar';
import styles from './Search.style';

const Search = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <SearchBar navigation={navigation} />
      <HistorySummary navigation={navigation} />
      <FavSearchSummary navigation={navigation} />
    </SafeAreaView>
  );
};

export default Search;
