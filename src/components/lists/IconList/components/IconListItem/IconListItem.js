import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';
import {Text, View} from 'react-native';
import React from 'react';

import styles from './IconListItem.style';

const IconListItem = ({icon, text, colored, frameless = false}) => {
  const {opa, opaColor} = useTheme();
  const color = colored ? opaColor.set7 : opa.set7;
  const buttonColor = frameless ? 'transparent' : color;

  return (
    <View style={styles.container(buttonColor)}>
      <Icon name={icon} size={20} color={color} />
      <Text style={styles.text(color)}>{text}</Text>
    </View>
  );
};

export default IconListItem;
