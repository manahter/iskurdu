import {useTheme} from '@react-navigation/native';
import React, {useRef, useEffect} from 'react';
import Lottie from 'lottie-react-native';
import styles from './NotFound.style';

const NotFound = () => {
  let animationRef = useRef();
  const {opa} = useTheme();

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
      source={require('../../../assets/lotties/not-found.json')}
      colorFilters={[
        {
          keypath: 'face',
          color: opa.set9,
        },
        {
          keypath: 'magnification glass',
          color: opa.set9,
        },
      ]}
    />
  );
};

export default NotFound;
