import {FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import SearchCard from '../../components/cards/SearchCard';
import useSearchFavs from '../../hooks/useSearchFavs';
import Trash from '../../components/lotties/Trash';
import styles from './FavSearches.style';

const FavSearches = ({navigation}) => {
  console.log('Page -> FavSearches');
  const {searchFavs} = useSearchFavs();
  const [trashMode, setTrashMode] = useState(false);

  const {opa} = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerRight: renderTrashButton,
    });
  }, [trashMode, opa]);

  const renderTrashButton = () => (
    <TouchableOpacity onPress={() => setTrashMode(!trashMode)}>
      {trashMode ? (
        <Trash />
      ) : (
        <Icon
          name={trashMode ? 'trash' : 'trash-outline'}
          size={20}
          color={trashMode ? opa.set9 : opa.set9}
          style={styles.trashIcon}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={Object.values(searchFavs).reverse()}
      // inverted={true}
      renderItem={({item}) => (
        <SearchCard
          navigation={navigation}
          trashMode={trashMode}
          isFav={true}
          icon="star"
          item={item}
        />
      )}
    />
  );
};

export default FavSearches;
