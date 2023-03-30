import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';

import SearchCard from '../../../../components/cards/SearchCard/SearchCard';
import useSearchHistory from '../../../../hooks/useSearchHistory';
import styles from './HistorySummary.style';

const HistorySummary = ({navigation}) => {
  const {searchHistory} = useSearchHistory();
  const {opa} = useTheme();

  return (
    <View style={styles.container}>
      {/* Favori Aramalar - Header*/}
      <View style={styles.favBar(opa)}>
        <Text style={styles.leftText(opa)}>Arama Geçmişi</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SearchHistory')}>
          <Text style={styles.rightText(opa)}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>
      {/* Favori Aramalar*/}
      <FlatList
        data={Object.values(searchHistory).reverse().slice(0, 7)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <SearchCard item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default HistorySummary;
