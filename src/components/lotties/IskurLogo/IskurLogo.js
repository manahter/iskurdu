import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './IskurLogo.style';

const IskurLogo = () => {
  const {dark, opa} = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={
          dark
            ? require('../../assets/iskur-dark.png')
            : require('../../assets/iskur-light.png')
        }
        style={styles.logo}
      />
      <Text style={styles.text(opa)}>Resmi uygulama değildir</Text>
    </View>
  );
};
export default IskurLogo;
