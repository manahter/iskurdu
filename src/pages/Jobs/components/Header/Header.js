import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import React from 'react';

import IconList from '../../../../components/lists/IconList';
import FavSearchButton from '../FavSearchButton';
import styles from './Header.style';

export default function Header({navigation, countJobsListed, countJobsTotal}) {
  const selectedOptions = useSelector(state => state.selected.options);
  const user = useSelector(state => state.user);
  const {opa, gri} = useTheme();

  const renderProfilePicture = (
    <TouchableOpacity
      onPress={() => navigation.navigate('Profile')}
      style={styles.imageButton}>
      {/* <Icon name="bookmark-multiple" size={22} color={opa.set9} /> */}
      {<Image style={styles.image} src={user.photoURL} />}
    </TouchableOpacity>
  );

  const renderSearchBar = (
    <TouchableOpacity
      onPress={() => navigation.navigate('Search')}
      style={styles.searchBar(opa)}>
      <Icon name="magnify" size={20} color={opa.set9} />
      <Text style={styles.text(opa)}>Ara</Text>
    </TouchableOpacity>
  );

  const renderSearchingItems = (
    <View style={styles.options(opa)}>
      <IconList item={selectedOptions} />
      <FavSearchButton selectedOptions={selectedOptions} />
    </View>
  );

  const renderJobCounts = (
    <Text style={styles.totalText(opa)}>
      İlanlar: {countJobsListed} / {countJobsTotal}
    </Text>
  );

  return (
    <View style={styles.container(gri)}>
      <View style={styles.topContainer}>
        {renderSearchBar}
        {renderProfilePicture}
      </View>
      {renderSearchingItems}
      {renderJobCounts}
    </View>
  );
}
