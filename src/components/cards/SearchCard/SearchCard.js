import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {View} from 'react-native';
import React from 'react';

import useSearchHistory from '../../../hooks/useSearchHistory';
import useSearchFavs from '../../../hooks/useSearchFavs';
import IconList from '../../lists/IconList';
import styles from './SearchCard.style';

const SearchCard = ({navigation, item, trashMode, isFav, icon = 'history'}) => {
  const {removeSearchHistory} = useSearchHistory();
  const {removeSearchFav} = useSearchFavs();
  const dispatch = useDispatch();
  const {opa} = useTheme();

  const handleGoToWorks = selectedOptions => {
    console.log('Page -> SearchFavs -> goPage -> Jobs >', selectedOptions.time);
    dispatch({type: 'selected/setOptions', payload: selectedOptions});

    // Önceki Requesti sıfırla
    dispatch({type: `request/clear`});

    // Seçilileri Request'e de geçir.
    Object.keys(selectedOptions).forEach(key => {
      dispatch({type: `request/${key}`, payload: selectedOptions[key].value});
    });
    dispatch({type: 'utils/setWorksPageReload', payload: true});
    navigation.navigate('Jobs');
  };

  const handleRemoveItem = item => {
    isFav ? removeSearchFav(item) : removeSearchHistory(item);
  };

  return (
    <View style={styles.item}>
      <Icon name={icon} size={20} color={opa.set7} />
      <IconList item={item} />
      <Icon
        size={20}
        style={styles.rightIcon}
        color={trashMode ? opa.set9 : opa.set7}
        name={trashMode ? 'trash-can-outline' : 'arrow-right'}
        onPress={() => {
          trashMode ? handleRemoveItem(item) : handleGoToWorks(item);
        }}
      />
    </View>
  );
};

export default SearchCard;
