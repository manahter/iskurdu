import {useTheme} from '@react-navigation/native';
import React, {useRef, useEffect} from 'react';
import Lottie from 'lottie-react-native';

import styles from './Trash.style';

const Trash = () => {
  let animationRef = useRef();
  const {dark} = useTheme();

  useEffect(() => {
    animationRef.play();
  }, []);

  return (
    <Lottie
      loop
      autoPlay
      speed={0.7}
      autoSize={true}
      resizeMode="cover"
      style={styles.lottie}
      ref={animation => {
        animationRef = animation;
      }}
      source={
        dark
          ? require('../../../assets/lotties/trash-dark.json')
          : require('../../../assets/lotties/trash-light.json')
      }
    />
  );
};

export default Trash;
