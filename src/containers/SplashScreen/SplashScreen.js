import React from 'react';
import {SafeAreaView, Image} from 'react-native';

import styles from './SplashScreen.style';

const SplashScreen = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/splash.jpg')}
        style={styles.image}
      />
      {children}
    </SafeAreaView>
  );
};

export default SplashScreen;
