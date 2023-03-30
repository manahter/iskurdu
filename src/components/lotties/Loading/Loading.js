import {useTheme} from '@react-navigation/native';
import React, {useRef, useEffect} from 'react';
import Lottie from 'lottie-react-native';
import styles from './Loading.style';

const Loading = () => {
  const {dark} = useTheme();
  let animationRef = useRef();

  useEffect(() => {
    animationRef.play();
  }, []);

  return (
    <Lottie
      loop
      autoPlay
      style={styles.lottie}
      ref={animation => {
        animationRef = animation;
      }}
      source={
        dark
          ? require('../../../assets/lotties/loading-dark.json')
          : require('../../../assets/lotties/loading-light.json')
      }
    />
  );
};

export default Loading;
