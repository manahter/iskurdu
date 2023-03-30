import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';

import styles from './Button.style';

const Button = ({text, onPress, outline = true, color}) => {
  const {opa} = useTheme();

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: outline ? 'transparent' : color || opa.set9,
        borderColor: outline ? color || opa.set9 : 'transparent',
      }}
      onPress={onPress}>
      <Text
        style={{
          ...styles.text,
          color: outline ? color || opa.set9 : opa.set0,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
