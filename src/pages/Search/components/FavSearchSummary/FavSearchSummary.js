import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';

import SearchCard from '../../../../components/cards/SearchCard/SearchCard';
import useSearchFavs from '../../../../hooks/useSearchFavs';
import styles from './FavSearchSummary.style';

const FavSearchSummary = ({navigation}) => {
  const {searchFavs} = useSearchFavs();
  const {opa} = useTheme();

  return (
    <View style={styles.container}>
      {/* Favori Aramalar - Header*/}
      <View style={styles.favBar(opa)}>
        <Text style={styles.leftText(opa)}>Favori Aramalar</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FavSearches')}>
          <Text style={styles.rightText(opa)}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>
      {/* Favori Aramalar*/}
      <FlatList
        data={Object.values(searchFavs).reverse().slice(0, 7)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <SearchCard
            item={item}
            navigation={navigation}
            icon="star"
            colored={true}
          />
        )}
      />
    </View>
  );
};

export default FavSearchSummary;
