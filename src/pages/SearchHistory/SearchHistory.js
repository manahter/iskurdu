import {FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import SearchCard from '../../components/cards/SearchCard';
import Trash from '../../components/lotties/Trash';
import styles from './SearchHistory.style';

const SearchHistory = ({navigation}) => {
  console.log('Page -> SearchHistory');
  const history = useSelector(state => state.searchHistory);
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

  const renderSearchCard = ({item}) => (
    <SearchCard item={item} navigation={navigation} trashMode={trashMode} />
  );

  return (
    <FlatList
      data={Object.values(history).reverse()}
      // inverted={true}
      renderItem={renderSearchCard}
    />
  );
};

export default SearchHistory;
