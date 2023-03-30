import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import React from 'react';

import useSearchFavs from '../../../../hooks/useSearchFavs';
import styles from './FavSearchButton.style';

const FavSearchButton = ({selectedOptions}) => {
  const {searchFavs, addSearchFav, removeSearchFav} = useSearchFavs();
  const isFav = searchFavs[selectedOptions.time];

  const {opa} = useTheme();

  const handleOnFavButton = () => {
    isFav ? removeSearchFav(selectedOptions) : addSearchFav(selectedOptions);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnFavButton}>
      <Icon name={isFav ? 'star' : 'star-outline'} size={28} color={opa.set9} />
    </TouchableOpacity>
  );
};

export default FavSearchButton;
