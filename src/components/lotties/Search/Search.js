import {useTheme} from '@react-navigation/native';
import React, {useRef, useEffect} from 'react';
import Lottie from 'lottie-react-native';

import styles from './Search.style';

const Search = () => {
  const {dark} = useTheme();
  let animationRef = useRef();

  useEffect(() => {
    animationRef.play();
  }, []);

  return (
    <Lottie
      loop
      autoPlay
      autoSize={true}
      style={styles.lottie}
      ref={animation => {
        animationRef = animation;
      }}
      source={
        dark
          ? require('../../../assets/lotties/search-dark.json')
          : require('../../../assets/lotties/search-light.json')
      }
      // resizeMode="contain"
    />
  );
};

export default Search;
