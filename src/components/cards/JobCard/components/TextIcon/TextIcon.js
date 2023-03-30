import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';
import {View, Text} from 'react-native';
import React from 'react';

import styles from './TextIcon.style';

const TextIcon = ({icon, text}) => {
  const {opa} = useTheme();

  return (
    <View style={styles.container}>
      <Icon name={icon} size={20} color={opa.set6} />
      <Text style={{...styles.text, color: opa.set7}}>{text}</Text>
    </View>
  );
};

export default TextIcon;
