import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './BackButton.style';

const BackButton = ({navigation, position = 'relative'}) => {
  const {opa} = useTheme();

  return (
    <TouchableOpacity
      style={styles[position]}
      onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" color={opa.set9} size={32} />
    </TouchableOpacity>
  );
};

export default BackButton;
